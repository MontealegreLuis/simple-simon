# Simple Simon Game

[![Build Status](https://travis-ci.org/MontealegreLuis/simple-simon.svg?branch=master)](https://travis-ci.org/MontealegreLuis/simple-simon)
[![codebeat badge](https://codebeat.co/badges/fc41b73e-e111-4349-bc44-6eb913087c40)](https://codebeat.co/projects/github-com-montealegreluis-simple-simon)

## Installation

In order to play the game you'll need to bundle the application using `make` and `uglify`.

```bash
$ npm install uglify-js -g  # Install uglify
$ make build                # Build the application
```

## How to play

1. Press `Start game`.
2. Follow the light sequence.
3. Play as long as you want.

Take a look at the original [TV spot](https://www.youtube.com/watch?v=aXV-rHOgEuc).

## Tests

In order to run the tests, you'll need to install `testem`.

```bash
$ npm install testem -g
```

Once installed, execute:

```bash
$ testem
```

It will run the tests using Chrome.
