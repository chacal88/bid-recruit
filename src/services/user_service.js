import User from "../models/User";
import Language from "../models/Language";
import GitService from "../github/service";


export default class UserService {

    static async create(args) {

        const login  = args.user.login;
        let user     = await User.findOne({login: login});
        let userData = await UserService.getAndCleanData(login);

        if (!user) {
            user = await User.create(userData);
        }

        let repos = await GitService.getUserRepos(userData['login']);

        var languagePromisses = await repos.map((repo) => {
            return GitService.getUserReposLanguage(login, repo['name'])
        });

        let languagesArray   = await UserService.processPromisses(languagePromisses);
        let languagesFiltred = await UserService.filterLanguages(languagesArray);

        languagesFiltred.map((lang) => {
            UserService.processLanguage(user, lang);
        });

        return User.findOne({login: login});
    };

    static async getAndCleanData(login) {

        let userData     = await GitService.getUserByName(login);
        userData['uuid'] = userData['id'];

        delete userData['id'];

        return userData;
    }


    static async processLanguage(user, repo) {

        if (!repo) {
            return false;
        }

        let name     = repo.toUpperCase().trim();
        let language = await Language.findOne({name: name})

        if (!language) {
            language = await Language.create({name: name})
        }

        let hasLanguage = await UserService.hasLanguage(user, language);

        if (!hasLanguage) {
            return UserService.findAndUpdate(user, language)
        }

        return null;
    };

    static async hasLanguage(user, language) {

        return User.findOne({
            "_id": user._id,
            "languages": {
                $in: [language]
            }
        });
    };

    static async findAndUpdate(user, language) {

        return User.findByIdAndUpdate(
            user._id,
            {$push: {languages: language}},
            {safe: true, upsert: true}
        );
    };

    static async processPromisses(languagePromisses) {

        let list = [];

         await Promise.all(languagePromisses)
            .then(response => {

                response.forEach((lang) => {
                    let a = Object.keys(lang.data).map(function (key) {
                        return key;
                    });
                    list = list.concat(...a)
                })
            });

         return list;
    };

    static async filterLanguages(languages) {

       return await languages.filter((elem, pos) => {
            return languages.indexOf(elem) === pos;
        });
    };
}
