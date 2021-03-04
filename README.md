# hq-web-dem

Commands:

1. Create ENV variables
 ```NAME=alecsa VERSION=v0.0.2```
   
2. Run command
```git checkout $VERSION```

3. ```npm install```

4. Build the project and pass ENV variables
```npm run build -- --env NAME=$NAME --env VERSION=$VERSION```
git add .