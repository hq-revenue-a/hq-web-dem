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

## Adds
* env-vars file with dotenv-plugin(https://webpack.js.org/plugins/environment-plugin/)
