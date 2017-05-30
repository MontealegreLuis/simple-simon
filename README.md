# Simple Simon Game

[![Build Status](https://travis-ci.org/MontealegreLuis/simple-simon.svg?branch=master)](https://travis-ci.org/MontealegreLuis/simple-simon)
[![codebeat badge](https://codebeat.co/badges/fc41b73e-e111-4349-bc44-6eb913087c40)](https://codebeat.co/projects/github-com-montealegreluis-simple-simon)

This branch uses ES6 classes and modules. If you want to see a simplified ES5 version 
(it need less tooling) go to the [ES5](https://github.com/MontealegreLuis/simple-simon/tree/7aaff85ab482e20cfa7a7da55d79731b75bcafe5) branch please.

## Installation

In order to play the game you'll need to bundle the application.

```bash
$ npm install      # Install the application dev dependencies
$ npm run build    # Bundle the application using rollup
```

## How to play

1. Press `Start game`.
2. Follow the light sequence.
3. Play as long as you want.

Take a look at the original [TV spot](https://www.youtube.com/watch?v=aXV-rHOgEuc).

## Tests

In order to run the tests, you'll need to install `testem`.

```bash
$ npm install testem -g  # Install testem globally
```

Once installed, execute the tests with Chrome

```bash
$ npm run test
```

Alternatively run the tests using PhantomJS

```bash
$ npm install -g phantomjs-prebuilt # Install PhantomJS if you haven't
$ npm run ci                        # Run the tests using PhantomJS
```
