# Introduction to NODE JS 🚀

Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine.

It allows developers to run JavaScript code outside of a web browser, enabling server-side scripting.

## How Node JS works

Node.js follows an event-driven, non-blocking I/O model, which means that it doesn't wait for an operation to complete before moving on to the next one.

Instead, it uses an event loop and callback functions to handle asynchronous operations, allowing it to handle multiple requests concurrently without getting blocked by long-running tasks.

## Node REPL

Node REPL (Read-Eval-Print Loop) is an interactive JavaScript CLI environment that allows you to execute JavaScript code on command line environment.

## Get Started with Node JS

- **Create a Project Directory:** Create a new directory for your Node.js project.

- **Initialize a Node.js Project:** Inside your project directory, you can initialize a new Node.js project using npm.

```javascript
    npm init
```

- **Write Your First Node.js Script:** Now you're ready to write your first Node.js script.

```javascript
console.log("Hello, NODE JS!");
```

- **Run Your Script:** To run your Node.js script, open a terminal, navigate to your project directory.

```javascript
    node index.js
```

## Difference between dependencies and devDependencies

Separating packages required for development (like testing frameworks and build tools) from those needed in production helps keep your project organized and makes it easier for new developers to understand the setup

- **Dependencies:** These are the packages required for your application to run in production. They include any library or module that your application needs at runtime.

  ### Installation

  ```javascript
  npm install express
  ```

  ### package.json

  ```javascript
  {
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
      "express": "^4.17.1",
      "mongoose": "^5.10.9"
    }
  }
  ```

- **devDependencies:** These are the packages that are only needed during the development and testing phases of your application. They are not required for your application to run in production.

  ### Installation

  ```javascript
  npm install -D express
  ```

  ### package.json

  ```javascript
  {
   "description": "",
    "dependencies": {
        "express": "^4.19.2"
    },
    "devDependencies": {
        "nodemon": "^3.1.3"
    }
  }
  ```

<br>
<br>

--- 📄 Document End Here! 🎉 -----
