# Curso Cypress Percy

Repositório do curso básico de testes de regressão visual com Cypress e Percy da [Escola Talking About Testing](https://talkingabouttesting.coursify.me).

## Pre-requisitos

Para instalar dependencias do projeto e executar os testes automatizados e necessario que o [Node.js](https://nodejs.org/en/) e [NPM](https://npmjs.com) estejam instalado no seu computador.

> As seguintes versoes de ambos sistemas foram utilizadas durante o desenvolvimento deste projeto (`node v12.18.3` e `npm 6.14.8`)

> Ao instalar o Node.js, o NPM e automaticamente instalado.

## Instalacao

Apos o clonar o projeto acesse o diretorio do mesmo e execute `npm install` para instalar as dependencias de desenvolvimento.

## Exportando o token do projeto criado no [Percy](https://percy.io)

Exporte como uma variavel de ambiente o token do seu projeto (disponivel no _dashboard_ do Percy).

Veja o exemplo de configuracao:

```
# Windows
$ set PERCY_TOKEN=<your token here>

# Unix
$ export PERCY_TOKEN=<your token here>
```

> Fonte: https://docs.percy.io/docs/cypress

## Executando os testes

Execute o comando `npm test` para executar os testes em modo _headless_
___

Um curso da [Escola Talking About Testing](https://talkingabouttesting.coursify.me).
