## Running the App
* Need to first run command 'mongod' //this will run in the background
* Command 'grunt serve' will run and launch App in browser
* App will run locally on localhost:9000
* WIP - Running on Heroku
   * Command 'heroku open' will launch app in browser
      * Still getting error messages on this

## Built with the Blocitoff Seed Application

This application is meant to be a pre-packaged backend for the Blocitoff Frontend Project.

It uses:

- Grunt for task management
- Express for backend
- Angular and ui-router for its frontend
- Sass/CSS (whichever is preferred) for styling
- Plain ol' HTML for markup
- Mongodb for storing data

__Note:__ While everything here should work fine with your computer, there may be some setup required for MongoDB. Try running the app without doing any separate installation, but if it doesn't work, try the following: If you're running Mac OSX, then you can follow [these instructions](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/) for getting Mongo setup. If you're running a Linux server (like Vagrant or Nitrous), you can make a run at [these instructions](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/), though you're probably best served doing this with your mentors help.

### Cloning and Installation

To get started working with the application, clone the repo into a new directory.

```bash
$ git clone https://github.com/Bloc/blocitoff_seed.git blocitoff
```

Once you've cloned it, make sure to install all the necessary packages. If you're on Windows using Vagrant, don't forget to use the `--no-bin-links` param with `npm install`.

__For Mac/Linux/Nitrous.io__

```bash
$ pwd # make sure you're in the blocitoff root directory
$ npm install
$ bower install
```

__For Windows/Vagrant__

```bash
$ npm install --no-bin-links
$ bower install
```

### Directory Structure

```
client/
   |__app/
   |   |__home/
   |   |__main/
   |   |__app.js & app.scss
   |
   |__assets/
   |   |__images/
   |
   |__components/
   |
   |__bower_components/
   |
server/
   ...
```

The app is structured differently from Bloc Jams. There are two main directories in the app: `client` and `server`. We recommend staying away from changing anything about the `server` directory unless you have a mentor willing to give you some insight into what's going on with it. It provides the backend logic for our application and could break the app if tampered with.

We'll be keeping all of our development in `client`. Within client there are several subdirectories that are important for doing the Frontend of the app.

#### Component Organization

The app is organized by feature, not by component type. This means that instead of having a folder for `controllers`, `models`, `styles`, etc., everything that has to do with a single feature or part of the app is grouped into one directory, regardless of language or function of the component.

For example, in the `home` directory we have everything related to the homepage (even though very little of it is populated). Styling, controller logic and markup is all in the same folder.

The `assets` folder should only be used for static assets like images and fonts. Scripts and styling will be put into component folders in this app structure.

#### Global Logic

Put anything that is relevant to the entirety of your Angular app in the `app.js` and `app.scss` files. This includes module importation and state definitions. Open the files and get a sense for what kind of stuff might be included.


### Running the App

The app uses [Grunt](http://gruntjs.com/) for running tasks, including running the server in development mode. To get started running the app locally, just run:

```bash
$ grunt serve -d
```

Pay attention to the output in the terminal while the app is running. Some of it may be useful, as detailed error messages, benchmarks, and tests run with Grunt's [watch task](https://github.com/gruntjs/grunt-contrib-watch). The app should auto-reload everytime you change and save anything in the `client` directory (no need to refresh the page).

The app runs on `localhost:9000`. It should open the page automatically in Google Chrome on start, but if it doesn't, you can navigate to the site manually.

### Interacting with the Backend to Make Data Persist

The backend is configured with one model for saving data - Task. Tasks have two properties, `name` and `description`. If you create an `ngSubmit`-driven save for tasks, you can pass an object with those two properties and have them save permanently to your mongodb backend.

### Routes/API Endpoints

The base route for making HTTP request is `/api/tasks`. The app supports the standard simple HTTP actions for handling data:

- `POST` to `/api/things` to create a task
- `GET` to `/api/things` to query a list of all tasks
- `GET` to `/api/things/:id` for querying a single task
- `PUT` to `/api/things` to update a specific task
- `DELETE` to `/api/things/:id` to delete a task

#### Recommended Angular Services and Directives

Use a service like [`$http`](https://docs.angularjs.org/api/ng/service/$http) to make HTTP requests to the api, and something like `ngSubmit` to create task data. An `ngRepeat` might be good for listing all of your tasks.

### Questions or Repeated Errors?

[Email me](mailto:joe@bloc.io)