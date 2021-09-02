# Basic Overview
This is a simple Ecommerce site that has cart functionality and perform simple CRUD actions to make changes to a MongoDB Atlas.
## Installation
You can install the packages in the terminal using:
```
npm install
```
You have to install it once for in the project folder and once more in the 'server' folder as the application and backend are separate and has different dependencies.
### Compiles and hot-reloads for development
```
npm run serve
```
Both processes have to be left running as they run on different ports.
### Compiles and minifies for production
```
npm run build
```
The application runs on localhost:8080 while the backend runs on :3001.
## Database - MongoDB Atlas
Change the uri with the admin credentials at index.js in the server folder to connect to your own database for viewing in 'Admin.vue'

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
