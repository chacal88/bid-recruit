import {Router} from 'express';
import GitService from '../../github/service';

const router = Router();


const urlGit = 'https://github.com';
const clientID = 'd2c8e4060ad563b6f776';
const clientSecret = '9df95a9a5b1812baa60ac306df8039835a8cd738';

router.get('/login', (req, res) => {
    return res.redirect(`${urlGit}/login/oauth/authorize?client_id=${clientID}`);
});

router.get("/logged", async (req, res) => {

    const requestToken = req.query.code;

    GitService.login(requestToken).then((data) => {
        return res.status(200).send(data)
    }).catch(error => {
        return res.status(400).send(error)
    });
});

router.get("/users", (req, res) => {

    const requestToken = req.header('Authorization');

    GitService.listUsers(requestToken).then((data) => {
        return res.status(200).send(data)
    }).catch(error => {
        return res.status(400).send(error)
    });
});

router.get("/users/me", (req, res) => {

    const requestToken = req.header('Authorization');

    GitService.getUser(requestToken).then((data) => {
        return res.status(200).send(data)
    }).catch(error => {
        return res.status(400).send(error)
    });
});

router.get("/users/:user", (req, res) => {

    const requestToken = req.header('Authorization');
    const user = req.params.user;

    GitService.getUserByName(requestToken, user)
        .then((data) => {
            return res.status(200).send(data)
        })
        .catch(error => {
            return res.status(400).send(error)
        });
});

router.get("/users/:user/repos", (req, res) => {

    const requestToken = req.header('Authorization');
    const user = req.params.user;

    GitService.getUserRepos(requestToken, user).then((data) => {
        return res.status(200).send(data)
    }).catch(error => {
        return res.status(400).send(error)
    });
});

router.get("/users/:user/repos", (req, res) => {

    const requestToken = req.header('Authorization');
    const user = req.params.user;

    GitService.getUserRepos(requestToken, user).then((data) => {
        return res.status(200).send(data)
    }).catch(error => {
        return res.status(400).send(error)
    });
});

router.get("/repos/:user/:repo/languages", (req, res) => {

    const requestToken = req.header('Authorization');
    const user = req.params.user;
    const repos = req.params.repo;

    GitService.getUserReposLanguage(requestToken, user, repos).then((data) => {
        return res.status(200).send(data)
    }).catch(error => {
        return res.status(400).send(error)
    });
});

export default router;
