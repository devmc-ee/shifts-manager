up-build:
	docker-compose up --build --force-recreate --remove-orphans shifts-manager-app
up-build-sb:
	docker-compose up --build --force-recreate --remove-orphans storybook
up:
	docker-compose up shifts-manager-app
up-sb:
	docker-compose up storybook 

down:
	docker-compose down --remove-orphans

build:
	yarn build