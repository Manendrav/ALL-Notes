
# What is Express JS ? 🧊
Express.js is a popular web application framework for Node.js. It provides a set of tools and features for building web applications and APIs quickly and easily. 

It simplifies the process of building web applications by providing a robust set of features for handling HTTP requests and responses, routing, middleware, templates and views, serving static files, and more.

Express is widely used due to its simplicity, performance, and the vast ecosystem of middleware available for extending its functionality.

**library:** Provides a collection of tools and components for developers to use as needed. The developer is in control of the application's flow and how the library's components are used.
  - **Examples:** Using a library is like having a set of ingredients and utensils to cook with. You decide what to cook, the sequence of steps, and how to use each ingredient or utensil.

**framework:** framework follows some specific kind of flow in the devlopment. Like the set of rules that how a application will be devloped.
  - **Examples:**  like making tea it follow certain steps to make a good tea. If you make dont follow those steps the you get a garbage tea.



## Keep that in mind

Express JS makes easy writing code for backend. It remove the complexity from the code you write in node js. It helps in writing and understanding the code in node js.

`important:` Express Js handles every request send from the client(browser), process those request and return response back to the client. Our whole backend development is based on this thats makes Express JS a important framework. 

- **Example:** Like you click a video on the youtube, it send request to the server where it recieved by express js then it process it like find the video you clicked and send that video as response that you watch.

## Why we should use Express JS insted of Node JS ?

While you can build web servers and APIs directly with Node.js, using Express.js offers several advantages that can make development faster, easier, and more efficient.

- **Simplified Routing:** Handling routing in Node.js requires manual parsing of the URL and method, which can become complex and cumbersome as the number of routes increases. And Express provides a clean and concise way to define routes using a simple and intuitive API.

- **Middleware Support:** Express.js provides a built-in middleware for serving static files (e.g., images, CSS, and JavaScript files) from a specified directory, which can save you time and effort compared to writing the code for handling static files manually with Node.js.

- **Error Handling:** Error handling in plain Node.js requires manual implementation and careful management of the request-response cycle. And Express has a consistent and easy-to-use error-handling mechanism.

## Problems Fixed by Express JS

- **Complex Routing:** Handling routing in plain Node.js involves manually parsing URLs and HTTP methods, which can become complex and error-prone as the number of routes increases. Express.js provides a clean and intuitive routing API, allowing you to define routes for different HTTP methods and URL patterns easily.

- **Request Handling:** Handling request data in plain Node.js involves manually parsing the request body, handling different content types, and ensuring proper encoding. Express.js simplifies request handling with built-in middleware to parse different types of request bodies (e.g., JSON, URL-encoded).

- **Static File Serving:** Express.js provides a built-in middleware for serving static files (e.g., images, CSS, and JavaScript files) from a specified directory. This functionality is commonly needed in web applications, and implementing it manually with Node.js can be repetitive and error-prone.

- **Modular and Scalable Code:** As your application grows, managing code organization and ensuring scalability becomes challenging with plain Node.js. But in Express.js encourages a modular structure, allowing you to split your application into smaller, reusable components (routes, middleware, etc.).

- **Extensive Middleware Ecosystem:** Implementing advanced features like authentication, validation, and logging can be cumbersome and time-consuming in plain Node.js. But in Express.js has a vast ecosystem of third-party middleware that can be easily integrated to add advanced functionalities to your application.

## Getting Started with Express.js

- **Creating package.json:**  Initialize a new Node.js project using `npm init` command and follow the prompts to create a package.json file for your project.


- **Installation:** To use Express in your Node.js project, you first need to install it via npm (Node Package Manager).

    ```javascript
    npm install express
    ```

### Creating a Basic Server
Create a new JavaScript file in the project directory and name it `index.js` or any name you prefer. 

Open `index.js` file in your code editor and add the following code:

 ```javascript
 import express from "express";

 const app = express();
 const PORT = 3000;

 app.get("/", (req, res) => {
   res.send("Hello from Express!!!");
 });

 app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
 });
 ```

 ### Code difference between Node JS and Express JS

 ```javascript
 // In Node JS

 const http = require('http');

 const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
 });

 server.listen(3000, () => {
   console.log('Server is running on 3000');
 });
 ```

 ```javascript
 // In Express JS

 const express = require('express');
 const app = express();

 app.get('/', (req, res) => {
   res.send('Home Page');
 });

 app.get('/about', (req, res) => {
   res.send('About Page');
 });

 app.use((req, res) => {
   res.status(404).send('Not Found');
 });

 app.listen(3000, () => {
   console.log('Server is running on 3000');
 });
 ```




<br>

--- 📄 Document End 🎉 -----