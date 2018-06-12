# react-firebase-authentication

[![Build Status](https://travis-ci.org/rwieruch/react-firebase-authentication.svg?branch=master)](https://travis-ci.org/rwieruch/react-firebase-authentication)

* Found in [Taming the State in React](https://roadtoreact.com/course-details?courseId=TAMING_THE_STATE)
* [Live](https://react-firebase-authentication.wieruch.com/)
* [Tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)

## Features

* uses:
  * only React (create-react-app)
  * firebase 5.0.0
  * react-router 4.2.0
  * no Redux/MobX
  * [React's 16.3 context API](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)
* features:
  * Sign In
  * Sign Up
  * Sign Out
  * Password Forget
  * Password Change
  * Protected Routes with Authorization
  * Database: Users

## Installation

* `git clone git@github.com:rwieruch/react-firebase-authentication.git`
* `cd react-firebase-authentication`
* `npm install`
* `npm start`
* visit http://localhost:3000/
* Use your own Firebase Credentials

### Use your own Firebase Credentials

* visit https://firebase.google.com/ and create a Firebase App
* copy and paste your Credentials from your Firebase App into src/firebase/firebase.js
* activate Email/Password Sign-In Method in your Firebase App


## .
## .
## .
## .
## .


# Webpack Tutorial

Este repositório é parte da série [Webpack Tutorial](https://www.youtube.com/playlist?list=PLhxF6V44XvXR05fSeNf38-67k3FZK2KLI) do canal JS Channel, no YouTube.

## Objetivo

Esta série vai te ensinar Webpack de forma rápida, focada na prática.
E você entenderá o suficiente para iniciar uma configuração específica para o seu projeto.

## Cards Jekyll Template - [Demo](https://willianjusten.github.io/cards-jekyll-template)

![Screenshot](screenshot.png)

O que iremos aprender
---------------------

1. O Que é e Como Webpack funciona
2. Definir o arquivo de configuração
3. Resolver extensões de arquivos
4. Trabalhar com Path Aliases
5. Loaders
  - O que são
  - Exemplos de loaders: ts-loader e sass-loader
6. Plugins
  - Minificando arquivos javascript
7. Configurando ambiente de Desenvolvimento
  - webpack-dev-server
  - Refresh automático no browser ao salvar um arquivo
  - Hot Module Replacement
  - Source Maps
8. Ambiente de Produção

Instalação
----------

Pré-requisitos.

  - [Node.js](https://nodejs.org/)
  - [Git](https://git-scm.com/)

Para instalar, execute os comandos abaixo.

1. Clone o repositório na sua máquina local.
  - ```git clone https://github.com/js-channel/webpack-tutorial.git```
2. Navegue até a pasta do projeto e instale as dependências.
  - ```cd webpack-tutorial && npm install```
3. Execute a aplicação.
  - ```npm start```
4. Abra a aplicação no browser com a URL
  - ```localhost:8080```

Branchs e Videos
---------------

Há um branch para cada vídeo. Então, por exemplo, para ver todo o código feito desde o começo da série até o vídeo #6, você pode executar este comando git no terminal:

```git checkout #6_Arquivo-de-Configuracao```

Dessa forma, você pode ficar alternando entre o código feito em cada vídeo da série.

Para visualizar todos os branchs, basta executar o comando:

```git branch -r```

Licença
-------

Feito com <strike>amor</strike> _um teclado_ por Rodrigo Ribeiro sob [Licença MIT](https://github.com/rodrigo3d/rodrigo3d.com/blob/me/LICENSE.md).

## .
## .
## .
## .
## .

## Cards Jekyll Template - [Demo](https://willianjusten.github.io/cards-jekyll-template)

![Screenshot](screenshot.png)

This is a simple and minimalist template for Jekyll designed for developers that want to write blog posts but don't want to care about frontend stuff.

The Theme features:
- [Updating to New Releases](#updating-to-new-releases)
- Gulp
- Stylus (Jeet, Rupture, Kouto Swiss)
- Live Search
- Offcanvas Menu
- SVG icons
- Very very small and fast!
- Shell Script to create posts
- Tags page
- Series page
- About Me page
- Feed RSS
- Sitemap.xml
- Color Customization
- Info Customization

## Updating to New Releases

Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, [open the changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.

## Sending Feedback

We are always open to [your feedback](https://github.com/facebookincubator/create-react-app/issues).

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

If you want to see this template in real action, take a look at my [original site](http://willianjusten.com.br/).

## Basic Setup

1. [Install Jekyll](http://jekyllrb.com) (use the command ```sudo gem install jekyll```)
2. Fork the [Cards Jekyll Template](https://github.com/willianjusten/cards-jekyll-template/fork)
3. Clone the repo you just forked.
4. Edit `_config.yml` to personalize your site.
5. Check out the sample posts in `_posts` to see examples for assigning categories and tags, and other YAML data.
6. Read the documentation below for further customization pointers and documentation.
7. **Remember to compile your assets files with Gulp.**

## Site and User Settings

You have to fill some informations on `_config.yml` to customize your site.

```
# Site settings
title: Willian Justen - Desenvolvedor Front End
description: A blog about lorem ipsum dolor sit amet
baseurl: "" # the subpath of your site, e.g. /blog/ or empty.
url: "http://localhost:3000" # the base hostname & protocol for your site 

# User settings
username: Lorem Ipsum
user_description: Anon Developer at Lorem Ipsum Dolor
email: anon@anon.com
twitter_username: lorem_ipsum
github_username:  lorem_ipsum
gplus_username:  lorem_ipsum
disqus_username: lorem_ipsum
```

## Header Name

To use the power of CSS Content and media query, the header name is defined on [src/styl/_header.styl](src/styl/_header.styl). Change to your prefered name.

## Color customization

All color variables are in [src/styl/_variables.styl](src/styl/_variables.styl). To change the main color, just set the new value at `main` assignment. Another colors are for texts and the code background color.

## Theme Colors

Every post has a main color that is defined on [src/styl/_theme-colors.styl](src/styl/_theme-colors.styl). Just create a new color with the prefix `post-` and define your main-class: 'css' and color: '#2DA0C3' on every post you create.

## Creating posts

You can use the `initpost.sh` to create your new posts. Just follow the command:

```
./initpost.sh -c Post Title
```

The new file will be created at `_posts` with this format `date-title.md`.

## Front-matter 

When you create a new post, you need to fill the post information in the front-matter, follow this example:

```
---
layout: post
title: "Falando sobre RSCSS"
date: 2016-02-07 18:48:16
image: '/assets/img/rscss/rscss.png'
description: 'Escrevendo CSS sem perder a sanidade. Aprenda uma metodologia que pode salvar muitas dores de cabeça.'
main-class: 'css'
color: '#2DA0C3'
tags:
- css
- metodologia
- frontend
categories:
twitter_text: 'Escrevendo CSS sem perder a sanidade.'
introduction: 'Escrevendo CSS sem perder a sanidade. Com essa introdução, Rico St. Cruz o criador chama a atenção de todos sobre uma metodologia melhor para se escrever CSS.'
---
```

## Running the blog in local

In order to compile the assets and run Jekyll on local you need to follow those steps:

- Install [NodeJS](https://nodejs.org/) (remember to use the latest version)
- Run `npm install`
- Run `npm install -g gulp gulp-cli`
- Run `gulp`

## Questions

Having a problem getting something to work or want to know why I setup something in a certain way? Ping me on Twitter [@willian_justen](https://twitter.com/willian_justen) or file a [GitHub Issue](https://github.com/willianjusten/will-jekyll-template/issues/new).


## Donation

If you liked my work, buy me a coffee <3

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UTMFZUHX6EUGE)

## License

This theme is free and open source software, distributed under the The MIT License. So feel free to use this Jekyll theme on your site without linking back to me or using a disclaimer.

If you’d like to give me credit somewhere on your blog or tweet a shout out to [@willian_justen](https://twitter.com/willian_justen), that would be pretty sweet.

[LICENSE](https://github.com/rodrigo3d/go/blob/master/LICENSE)