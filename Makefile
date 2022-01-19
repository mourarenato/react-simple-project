fileMode: ##@Configuration Sets git fileMode to false
	@echo "Configuring git fileMode to false"
	git config core.fileMode false

files: ##@Copy files and set permissions
	sudo cp docker-compose.example.yml docker-compose.yml
	sudo chmod 777 -R *

install: ##Install dependencies
	@echo "Installing dependencies"
	docker-compose up -d
	sudo chmod 777 -R node_modules/

up: ##Up containers
	docker-compose up -d

start: ##Start server
	docker exec -it react-simple-project bash -c "npm start"
	
