#HexOcean - Recruitment

> This project was created with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Project Idea](#project-idea)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Knowlage Bases](#knowlage-bases)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Available Scripts

If using Yarn:

- `yarn start`
- `yarn run build`

Or if using Npm:

- `npm start`
- `npm run build`

## Technologies Used

## Project Idea

####This project is made for recruitment on Front-End Developer position.

I was start this project with chosee technologies, so I decaite to use React becouse I have the most expirience with this framework, next I build maind map what i need and how to make that, next i devait to use ExpressJs becouse its very good framework to build backend and working very well with MongoDB.

## Screenshots

## Setup

    1. Download project by git pull ${link to repo}
    2. Lunch Docker and follow this commends:
        a: `sudo docker pull mongo`
        b: `sudo docker run -it -v mongodata:/${path to saving data} --name mongodb -d mongo
    3. Open project folder and follow commends:
        a: `cd server`
        b: `yarn install`
        b: `nano .env` -> type "MONGODB_URI=${link to mongodb and add "/${Database name", default: mongodb://127.0.0.1:27017/mec} -> save by Ctrl + O (on MacOS)`
        c: `yarn start`
        d: `Open secound terminal`
        e: `cd client`
        f: `nano .env` -> type "REACT_APP_SERVER_PATH=${path to server, default: http://localhost:4000} -> save by Ctrl + O (on MacOS)`
        g: `rm -R build`
        h: `yarn build`
        i: `server -s build`
    4. Lunch browser and connect to localhost:5000

If you're using npm:

    1. Download project by git pull ${link to repo}
    2. Lunch Docker and follow this commends:
        a: `sudo docker pull mongo`
        b: `sudo docker run -it -v mongodata:/${path to saving data} --name mongodb -d mongo
    3. Open project folder and follow commends:
        a: `cd server`
        b: `npm install`
        b: `nano .env` -> type "MONGODB_URI=${link to mongodb and add "/${Database name", default: mongodb://127.0.0.1:27017/mec} -> save by Ctrl + O (on MacOS)`
        c: `npm start`
        d: `Open secound terminal`
        e: `cd client`
        f: `nano .env` -> type "REACT_APP_SERVER_PATH=${path to server, default: http://localhost:4000} -> save by Ctrl + O (on MacOS)`
        g: `rm -R build`
        h: `npm build`
        i: `serve -s build`
    4. Lunch browser and connect to localhost:5000

## Knowlage Bases

## Acknowledgements

## Contact

    Szymon Jarmuszczak
    mail: szymon.jarmuszczak@gmail.com
    tel: (+48) 572-344-506
