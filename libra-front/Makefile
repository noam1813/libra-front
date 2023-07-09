.DEFAULT_GOAL := help
.PHONY: init yarn/create yarn/install yarn/start yarn/build yarn/test start stop restart

dc:=docker exec -d frontend

init:
	make build
	make yarn/init

build:
	docker-compose up -d --build
	docker ps -a

yarn/create:
	$(dc) yarn create react-app . --template typescript

yarn/remove-module:
	rm -rf frontend/node_modules
	rm -rf frontend/package-lock.json

yarn/init:
	make yarn/remove-module
	$(dc) yarn install
	make yarn/start

yarn/install:
	make yarn/stop
	make yarn/remove-module
	$(dc) yarn install
	make yarn/start

yarn/start:
	$(dc) yarn run start

ps:
	$(dc) ps aux

yarn/stop:
	make ps
	$(dc) ./yarn-stop
	make ps

yarn/build:
	$(dc) yarn run build

yarn/test:
	$(dc) yarn run test

start:
	docker compose up -d

stop:
	docker compose down

restart:
	make stop
	make start
	make yarn/init
	make yarn/start

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'