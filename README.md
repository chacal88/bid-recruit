# Instalação da API


#Utilização da API

Antes de mais nada você deverá gerar seu token de acesso.

#### Gerar Token Github

`acessar a url e logar no git`

[link para gera token](http://localhost:3000/git_hub/login)


Após autorizar você será direcionado para uma tela com o token de acesso, anote o access_token e utilize no header da api para consultar.

```json
{ 
    "access_token": "abb8af320606bed7fa78471a734a7a91c255ba46",
    "token_type": "bearer",
    "scope": ""
}
```

#Documentação API

`acessar a url para conhecer os End Points`

[link para documentação](https://documenter.getpostman.com/view/1854300/SW17Saj2?version=latest)


Você deve inserir no header da requisição o token gerado com o bear

```
GET /git_hub/users/me HTTP/1.1
Host: localhost:3000
Authorization: bearer 08075352ae989e7470bf11d516b5045c8e717e33
```


