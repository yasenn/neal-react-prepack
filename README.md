### Description

Project with ```neat-react``` components: [https://github.com/dennybritz/neal-react](https://github.com/dennybritz/neal-react)

```neal-react``` is a collection of reactjs components to quickly build landing pages. I found that using hosted services like Launchrock doesn't give me enough flexibility, but frameworks like Bootstrap are too low-level and lead to lots of repetitive code. I wanted something in between these two extremees.

<br/>

### Technologies and libraries
The following libs and technlogies were used:
* ```react``` (0.14)
* ```react-router```
* ```neal-react```
* ```redux``` (```react-redux```)
* ```express```
<br/>
<br/>

### Start backend server
If you want to see the app in action please do the following:
* Go to folder where you unpack downloaded package.
* Run command: ```npm install```
* Run command: ```npm run build-client```
* Run command: ```node ./server.js```
* Go to http://localhost:3000

### Structure of the source code
```
build-conf/
 |--gulpfile.js
 |--webpack.config.js
 |--webpack-dev.config.js
public/
 |--images/
 |   |--...
 |--resources/
 |   |--...
 |--index.html
 |--...
src/
 |--client/
 |   |--store/ 
 |   |   |--storeManager.js
 |   |   |--...
 |   |--... 
 |   |--main.js
 |--...
server.js
```
#### Build scripts
* ```build-conf/gulpfile.js``` - this is gulp's config file for production & development build tasks. 
* ```build-conf/webpack.config.js``` - this is webpack's config file for production. 
The output of this config will be the minimized files in ```public/``` folder.
* ```build-conf/webpack-dev.config.js``` - this is webpack's config file for development stage of the project.
<br/>

#### Output Web app files
* ```public/``` - folder where static compiled files are.
* ```public/index.html``` - index file of our Web app. If you have included manually resources into meta file ```.structor/desk/index.html``` don't forget to include them here as well.
* ```public/images/``` ```public/resources/``` - due to rewriting rules in express.js we need to separate resources from index file.
<br/>

#### Source code 
* ```src/``` - folder in which the source code of application is. 
Folders are created using examples from Redux documentation.
* ```src/client/store/storeManager.js``` - file which is used as connection point of Redux store for Structor and for real app.
* ```src/client/main.js``` - entry point of Web app. 
If you add manually React components into metainfo index.js you have to add them here as well.

```server.js``` - express backend server for current Web app.
<br/>

### Starting Structor 
If you still didn't start the backend server please do the following: 
* Run command: ```npm install```
* Run command: ```node ./server.js```

Now you can start Structor from command line. To recognise the path of current project's folder Structor has 
to be started in the root directory of current project or started with command argument ```-d``` pointing to project's folder. 
* in project root dir: ```structor```
* in any other dir: ```structor -d <path to project directory>```

Once you have started Structor you will see the project's workspace. Now you can try to combine components with each other, 
or generate new React components from the combination, or add new pages, or whatever you want.
<br/>

### Exporting pages with routes
In any moment of work with Structor you can export existing pages into real pages with routes.
This can be done by selecting option "Export project". 

After that you will get a list of generated files of pages' components. And one more additional file for router configuration.
In current project these files will be generated into ```src/routes/``` folder. But, you can change this path in ```.structor/config.json``` file. 

Also you may edit templates for output React components in ```.structor/templates/``` or add your own new with ".tpl" extension.
<br/>

### Building and trying real Web app
Having exported pages and routes you can run webpack's build script:
* ```npm run build-client```

Then, if everything were built and you didn't stop backend server, just go to http://localhost:3000

#### Customize style
If you want to change style you have to change SASS variables before building the client.
* Change variables in file: ```src/client/assets/scss/neal-react.scss```
* Run command: ```npm run build-client-sass```
<br/>

### License
MIT
