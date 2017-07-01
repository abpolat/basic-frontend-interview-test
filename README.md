# Basic Front-End Interview Test
> React, Redux, Webpack 2, React Router, Babel, Eslint (Airbnb), Sass, Bootstrap

A sample project written by me to list McMacler Real Estate Properties.

I used [Marvin](https://github.com/workco/marvin) as boiler plate to save time.

## Setup
    git clone https://github.com/abpolat/basic-frontend-interview-test.git
    cd basic-frontend-interview-test

    npm install
    npm start

**Open**

    http://localhost:3000

## Linting

For linting I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
but some options are overridden to my personal preferences.

```
$ npm run lint
```

## Git hooks

Linting pre-push hook is not enabled by default.
It will prevent the push if lint task fails,
but you need to add it manually by running:

```
npm run hook-add
```

To remove it, run this task:

```
npm run hook-remove
```

## Author

Burak Polat

[bytok.net/cv](http://bytok.net/cv)