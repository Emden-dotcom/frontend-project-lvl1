setup: install brain-games publish lint

install:
	npm install

brain-games:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .