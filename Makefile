up-build:
	docker-compose up --build --force-recreate --remove-orphans
up:
	docker-compose up

down:
	docker-compose down --remove-orphans

build:
	yarn build