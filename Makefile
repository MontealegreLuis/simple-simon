SHELL = /bin/bash

.PHONY: build

build:
	@echo "Bundling application..."
	@uglifyjs --config-file uglify.json -c -m -o dist/app.min.js -- src/random-generator.js src/simon.js src/player.js src/game.js src/boxes.js src/display.js src/display.js src/board.js src/sequence.js src/board-animation.js src/main.js
