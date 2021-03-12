# task_tracker

A simple task tracker app built using vue.js. The app was created inorder to brush up the basic concepts in vuejs. The end user can add, delete and update tasks. A proxy server is ran on port 5000 inorder to store and retrieve data event event after page refresh.

### List of Vue concepts used:
1. Vue Router
2. Creating and using component
3. Usage of props
4. Emit function
5. Compute function
6. V-bind, V-model
7. Fetch and axios api calls

### User Interface of the application

#### Add Task
<div align="center">
	<img src="/src/assets/tasktrack_add.JPG">
</div>

#### List Task
<div align="center">
	<img src="/src/assets/homepage_tasktracker.JPG">
</div>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### To Run proxy server
```
npm run backend