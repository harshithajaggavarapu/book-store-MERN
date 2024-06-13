# Getting started for self help/ Notes
- npm init -y
- adding type :"module" in package.json , done to break up our code into separate files (modules), i.e for using import, export statements , basically its to enable module support in our project to use ES6 module system.
- adding express , nodemon to our project 
    - npm i express nodemon
    - nodemon is a utility that monitors for any changes in your source code and automatically restarts your server (similar purpose of HMR(hot module replacement) in parcel/ webpack)
    - adding scripts to package.json to make our life easy!!
        - node index.js // start project with node js environment, usually meant for prod env
        - nodemon index.js // in dev mode usually so that server is restarted automatically and changes are reflected 

-  Creating a server and connecting it to a port
    - setting up express.js server(in index.js file) and define port 
    - we need to write a func to listen to the port.
    - npm run dev // to test if our server is up and running fine so far

- Creating Http Route
    - for each url we need to have a http route and for server we need to have a default route i.e usually "/" , so we now create a
        http route when user enters "locohost:5555/"  in index.js using express js

- Adding MongoDB and mongoose to node js
    - mongoose is Object Data Modeling(ODM) library that creates connection between mongoDB and node js 
    - create a mongodb new project in website and get the connection String for DB
    -  npm i mongoose 
    - using mongoose connect to database

- REMEMBER WORKING WITH MANGOOSE IS ASYNCHRONOUS

- Create Book model with mongoose
    - https://mongoosejs.com/docs/guide.html
    - define Schema
    - create model using that Schema

- Save a new book using Mongoose
    - we need post http route to create and save a new book
        - app.use(express.json()) middleware function in Express.js is used to parse incoming request bodies that contain JSON      payloads. Without this express will not be able to parse the JSON payload in the body of incoming POST requests, and the request.body property will be undefined.
        - Middleware functions are functions that have access to the request object, the response object, and the next middleware function in the application’s request-response cycle.
    - we use the schema refernce and create an object of data from user and then create a Book using Book.create()

- get all books present in collection using mongoose
    - to get all the data in a collection we use .find({}), empty {} will return all data in collection

- get one book by id
    - to pass parameter in route we use "/book/:id" just like in javascripts

- updating a book in collection
    - put method to update a resource

- delete a book route

- refactor node js with express router (i.e organizing routes into separate modules for different models)
    - steps to do it
        - we will create a  file for each model and keep all the routes corresponding to that model in that file using express.Router()
        - we will now export that router and use it in index.js
    - Final answer is 
        - Define a model
        - Define routes using Router
        - setup express app

- CORS policy in node js and express js
    - servers check origin, methods, headers of the request coming from a domain  and then allow/deny the request
    - To fix the cors error when connecting from frontend to backend
        - npm i cors 
        - Then use middleware for handling cors policy 
            - option 1 : Allow all cors by default
                - app.use(cors());
            - option 2: Allow custom origins
                - app.use(cors({
                    origin:'http:localhost:3000',
                    methods:['GET','POST','PUT','DELETE'],
                    allowedHeaders:['Content-Type'],
                }))

- Now create a front end app and connect to it
- Hip hip hooray!!!! Harshu congrats for writing your first ever BE code entirely !! Long way to go girl ! Become 'THE BEST DEV'
# Notes:
- When initializing express.js application with database follow the below steps.
    - Import necessary modules.
    - Set up middleware and routes.
    - Connect to the database.
    - Start the server only after a successful database connection.