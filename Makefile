test:
	./node_modules/.bin/mocha --ui tdd --reporter list --require assert

.PHONY: test