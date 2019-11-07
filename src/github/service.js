import axios from "axios";

const urlGit = 'https://api.github.com';
const clientID = 'd2c8e4060ad563b6f776';
const clientSecret = '9df95a9a5b1812baa60ac306df8039835a8cd738';

export default {

    login: (requestToken) => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: `${urlGit}/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
                headers: {
                    accept: 'application/json'
                }
            }).then((response) => {
                resolve(response.data);
            }).catch(error => {
                reject(error.message)
            });
        })
    },

    listUsers: (requestToken) => {
        return new Promise((resolve, reject) => {
            axios.get(`${urlGit}/users`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': requestToken
                }
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error)
            });
        })
    },

    getUser: (requestToken) => {
        return new Promise((resolve, reject) => {
            axios.get(`${urlGit}/user`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': requestToken
                }
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error)
            });
        })
    },

    getUserByName: (requestToken, name) => {
        return new Promise((resolve, reject) => {
            axios.get(`${urlGit}/users/${name}`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': requestToken
                }
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error)
            });
        })
    },

    getUserRepos: (requestToken, owner) => {
        return new Promise((resolve, reject) => {
            axios.get(`${urlGit}/users/${owner}/repos`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': requestToken
                }
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error.message)
            });
        })
    },

    getUserReposLanguage: (requestToken, owner, repos) => {
        return new Promise((resolve, reject) => {
            axios.get(`${urlGit}/repos/${owner}/${repos}/language`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': requestToken
                }
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error.message)
            });
        })
    }
};
