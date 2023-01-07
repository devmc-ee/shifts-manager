up-build:
	docker container prune -f
	-docker volume rm shifts-manager_app
	-docker volume rm shifts-manager_node_modules
	docker-compose up --build --force-recreate --remove-orphans shifts-manager-app
up-build-sb:
	docker-compose up --build --force-recreate --remove-orphans storybook
up:
	docker-compose up shifts-manager-app
up-sb:
	docker-compose up storybook 

down:
	docker-compose down --remove-orphans

clear: 
	docker container prune
	docker volume rm shifts-manager_app
	docker volume rm shifts-manager_node_modules

build:
	yarn build