# API Installation

To start the application type the command

docker-make up


# API Usage

First of all you should generate your access token.

#### Generate Github Token

`access url and login to git`

[link to generate token] (http: // localhost: 3000 / git_hub / login)


After authorizing you will be directed to a screen with the access token, write down the access_token and use in the api header to consult.

`` `json
{
    "access_token": "abb8af320606bed7fa78471a734a7a91c255ba46",
    "token_type": "bearer",
    "scope": ""
}
`` `

# API Documentation

`access url to know End Points`

[link to documentation] (https://documenter.getpostman.com/view/1854300/SW17Saj2?version=latest)


You must insert in the request header the bear generated token

`` `
GET / git_hub / users / me HTTP / 1.1
Host: localhost: 3000
Authorization: bearer 08075352ae989e7470bf11d516b5045c8e717e33
`` `

You can also import schema into your postman
[link to schema] (https://raw.githubusercontent.com/chacal88/bid-recruit/master/BidRecruit.postman_collection.json)
