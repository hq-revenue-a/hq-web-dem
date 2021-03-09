# hq-web-dem

This project is proof of concept that it is possible to build the project depending on the version (tag of the branch) and passing environment variables.

Commands:

1. Create ENV variables
 ```NAME=alecsa VERSION=v0.0.2```
   
2. Run command
```git checkout $VERSION```

3. ```npm install```

4. Build the project and pass ENV variables
```npm run build -- --env NAME=$NAME --env VERSION=$VERSION```
   
Commands could be added to package.json > scripts, 
but we still have to pass ENV variables as command parameters.

# Pull Request Suggestion

Implement build flow with environment variables in a .env file. The advantages could be:

* It separates the variables in a file and this file can be created with greater flexibility than passing ENV vars via command line.
* The versions would be in control of variables possibilities.
* The Variables passed via command can be more focused on it's purposes.

## Usage example:

```shell
VERSION='v0.5' && yarn build:prod --env FOLDER=FF51
```

This command will:
* checkout the version v0.5 on a detached head;
* run the installation script
* run the build:
  * read the env vars from the .env file
  * create a new destination folder
  * build the script

## Adds
* env-vars file with dotenv-plugin(https://webpack.js.org/plugins/environment-plugin/)

## Docker

Docker build:
```shell
docker build -t demo/builder:latest -f docker/builder/Dockerfile .
```