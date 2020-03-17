.PHONY: build

build:
	npm run build

run:
	npm start

test:
	npm run test

lint:
	npm run lint
	./node_modules/prettier/bin-prettier.js --write "src/**/*.{ts,tsx}"
	./node_modules/typescript/bin/tsc --noEmit --rootDir .

format:
	./node_modules/prettier/bin-prettier.js --write "src/**/*.{ts,tsx}"