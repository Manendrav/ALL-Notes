# What is Routing in Express JS ?

Routing in Express.js refers to the process of defining the various endpoints in your web application and specifying what should happen when a request is made to each of these endpoints. 

Each endpoint (or route) is associated with a specific HTTP method (GET, POST, PUT, DELETE, etc.) and a URL path.

`res.send():` It is a versatile method used to send various types of responses, such as strings, buffers, JSON objects, or arrays.

```javascript
  res.send('Hello World'); // Sends plain text
  res.send('<h1>Hello World</h1>'); // Sends HTML content
  res.send({ message: 'Hello World' }); // Sends JSON, but use res.json() is preferred
```

<br>

`res.json():` It is specifically designed to send JSON responses. It sets the Content-Type to `application/json` and converts the provided object or array to a JSON string before sending it.

```javascript
  res.json({ name: 'John', age: 30 }); // Sends JSON response
```

<br>

`res.render():` It  is a method used to render a view template and send the HTML response to the client. It is commonly used in applications that utilize templating engines to generate dynamic HTML content based on data.

```javascript
  res.render(view, [locals], [callback])

// view: The name of the template file to render (without the file extension).
// locals: (Optional) An object containing local variables to pass to the template.
// callback: (Optional) A function to call once the rendering is complete, typically used for error handling.
```

### Route handlers
In Express.js, route handlers are functions that handles incoming HTTP requests and send appropriate responses back to the client. These functions are associated with specific routes (URLs) and HTTP methods (GET, POST, PUT, DELETE, etc.) using the app.METHOD() functions.

## Defining Routes in Express.js
```javascript
// Define a GET route for the home page
app.get('/', (req, res) => {                // Route handlers
  res.send('Hello, World!');
});

// Define a GET route for the about page
app.get('/about', (req, res) => {
  res.send('About Page');
});
```

## Routing parameters
Routing parameters in Express.js allow you to capture values specified in the `URL` so you can use them in your application. This is especially useful for creating dynamic routes that can respond to a variety of requests.

### Types of Routing Parameters

1. **Route Parameters:** Route parameters are named URL segments that are used to capture the values at specific positions in the URL. These are defined in the route path by prefixing the parameter name with a colon `(:)`.

-  ` req.params ` object is used in this case because it has access to all the parameters passed in the url

```javascript
const users = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Jane', age: 22},
    {id: 3, name: 'Doe', age: 30}
]

app.get('/api/users/:userId', (req, res) => {               // :userId is a route parameter
    const userId = parseInt(req.params.userId);             // parseInt() is used to convert string to integer

    if(isNaN(userId)) {
        return res.status(400).send({error: 'Invalid user ID'});
    }

    const user = users.find(user => user.id === userId);
    if(!user) {
        return res.status(404).send({error: 'User not found'});
    }
    res.send(user);
});
```

- **Multiple Parameters:** You can define multiple parameters in a route.
```javascript
app.get('/users/:userId/books/:bookId', (req, res) => {
  const userId = req.params.userId;
  const bookId = req.params.bookId;
  res.send(`User ID: ${userId}, Book ID: ${bookId}`);
});
```

2. **Query Parameters:** Query parameters are specified in the URL after the question mark `(?)` and are usually used for filtering, searching, or specifying options.

- ` req.query ` object is used in this case because it has access to all the parameters passed in the url

```javascript
const users = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Jane', age: 22},
    {id: 3, name: 'Doe', age: 18},
    {id: 4, name: 'Doel', age: 15},
    {id: 5, name: 'Dome', age: 7},
]

app.get('/api/users', (req, res) => {              
    const query = parseInt(req.query.age);                  // age is the key here, present in the 'req.query' object
    
    if (isNaN(query)) {
        return res.status(400).send('Invalid age parameter');
    }

    const filteredUsers = users.filter((user) => user.age > query);
    res.json(filteredUsers);

});
```

- **Multiple Query Parameters:** You can define multiple parameters in a route.

```javascript
 app.get('/search', (req, res) => {
   const query = req.query.q;
   const page = req.query.page;
   res.send(`Search query: ${query}, Page: ${page}`);
 });
```
Accessing ` /search?q=nodejs&page=2 ` will result in ` req.query.q ` being `nodejs` and `req.query.page` being `2`.


3. **Request Body Parameters:** These parameters are typically used with POST, PUT, or PATCH requests and are included in the request body. Express provides middleware like express.json() and express.urlencoded() to parse these parameters.

```javascript
 app.use(express.json()); // Parse JSON bodies

 app.post('/users', (req, res) => {
   const name = req.body.name;
   res.send(`User name: ${name}`);
 });

```

## Routing Methods

Routing methods in Express.js are used to define the various HTTP methods that your application can respond to. These methods correspond to the different types of requests that clients can make to the server.

### Common Routing Methods

1. **GET Method:** The `GET` method is used to request data from the server. It's the most common HTTP method and is used for fetching resources from the server.

```javascript
const users = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Jane', age: 22},
    {id: 3, name: 'Doe', age: 30}
]

app.get('/api/users', (req, res) => {                    // it is used to get data from the server
    res.status(200).send(users);
    }
);
```

2. **POST Method:** The `POST` method is used to send data to the server to create a new resource. This is often used for form submissions or uploading data.

```javascript
app.post('/api/users', (req, res) => {                  // it is used to send data to the server
    const user = req.body;
    const newUser = { id: users.length + 1, ...user };
    users.push(newUser);
    res.send(newUser);
});
```

3. **PUT Method:** The `PUT` method is used to update an existing resource on the server. It replaces the entire resource with the new data provided.

```javascript
app.put('/api/users/:userId', (req, res) => {               // it is used to update entire data on the server
    const userId = parseInt(req.params.userId);
    const user = users.find(user => user.id === userId);

    if(!user) {
        return res.status(404).send({error: 'User not found'});
    }

    const {id, name, age} = req.body;

    user.id = id;                   // in real world scenario, we should not update the id, it is only updated by db
    user.name = name;
    user.age = age;

    res.send(user);
});
```

4. **PATCH Method:** The `PATCH` method is used to make partial updates to a resource. It is more efficient when you only need to update a part of a resource.

```javascript
app.patch('/api/users/:userId', (req, res) => {               // it is used to partially update data on the server
    const userId = parseInt(req.params.userId);
    const userIndex = users.findIndex(user => user.id === userId);

    if(userIndex === -1) {
        return res.status(404).send({error: 'User not found'});
    }
            
    //here we are Merge existing user data with new data from the request  =>  ref(see how can we merge two objects in js using spread operator)
    users[userIndex] = {...users[userIndex], ...req.body};      // This part, req.body, contains the new data sent by the client to update the user,   

    res.send(users[userIndex]);
});
```

5. **DELETE Method:** The `DELETE` method is used to delete a resource from the server.

```javascript
app.delete('/api/users/:userId', (req, res) => {               // it is used to delete data from the server
    const userId = parseInt(req.params.userId);

    if(isNaN(userId)) {
        return res.status(400).send({error: 'Bad request!!!'});
    }

    const userIndex = users.findIndex(user => user.id === userId);

    if(userIndex === -1) {
        return res.status(404).send({error: 'User not found'});
    }

    users.splice(userIndex, 1);
    res.send(users);
});
```

6. **HEAD Method:** The `HEAD` method is identical to `GET` but does not return the body of the response. It is useful for checking what a GET request will return before actually making the GET request.

- This is often used to check if a resource exists, and to get information like content type or length, without downloading the actual content

```javascript
app.head('/api/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = users.find(user => user.id === userId);

    if (user) {
        res.status(200).send();     // User exists
    } else {
        res.status(404).send();     // User does not exist
    }
});
```

## Routing Paths

It allow you to specify different URLs that your application will respond to. These paths can include static routes, dynamic routes with parameters, and even more complex patterns using regular expressions.

1. **Static Routes:** It refer to routes that match exactly to the specified path. They are straightforward and do not contain any dynamic segments or parameters. These routes are useful for serving fixed content, such as the home page, about page, or contact page of a website.

```javascript
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});
```

2. **Dynamic Routes:** Dynamic routes use route parameters, which are named segments prefixed with a colon `(:)`. These parameters capture the values specified at those positions in the URL.

```javascript
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});
```
- When you visit `/users/123`, `req.params.userId` will be `123`.

3. **Optional Parameters:** You can make route parameters optional by appending a question mark (?) to the parameter name.
```javascript
app.get('/users/:userId/:bookId?', (req, res) => {      // /:bookId? is optional parameter
  const userId = req.params.userId;
  const bookId = req.params.bookId;
  res.send(`User ID: ${userId}, Book ID: ${bookId ? bookId : 'None'}`);
});
```

4. **Using Hyphen (-) and Dot (.):** You can define routes with hyphens `-` and dots `.`, which are useful for SEO-friendly URLs or versioning.

```javascript
app.get('/user-profile', (req, res) => {
  res.send('User Profile');
});

app.get('/api/v1/users', (req, res) => {
  res.send('API Version 1 - Users');
});
```

5. **Route Patterns with Regular Expressions:** You can use regular expressions to define more complex routing patterns.
```javascript
app.get(/.*fly$/, (req, res) => {
  res.send('Route matches any path ending with "fly"');
});
```
- This route matches `/butterfly`, `/dragonfly`, etc.

6. **Route Handlers:** A single route path can have multiple handlers. These handlers are executed in sequence.

```javascript
app.get('/example', (req, res, next) => {
  console.log('First handler');
  next();
}, (req, res) => {
  res.send('Second handler');
});
```
<br>

**`app.route():`** The app.route() method allows you to chain multiple route handlers for a single route path. This helps to organize code and avoid redundancy.

```javascript
app.route('/book')
  .get((req, res) => {
    res.send('Get a random book');
  })
  .post((req, res) => {
    res.send('Add a book');
  })
  .put((req, res) => {
    res.send('Update the book');
  });
```
<br>

**`express.Router:`** `express.Router` is a built-in middleware and routing system in Express.js that allows you to create modular, reusable, and mountable route handlers. It provides a way to organize your routes and associated middleware into separate and self-contained modules.

- It is particularly useful in larger applications where you have many routes and want to keep your code organized and maintainable.

```javascript
const app = express();
const router = express.Router();

router.get('/user/:id', (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

router.post('/user', (req, res) => {
  res.send('Add a user');
});

app.use('/api', router);        // Mount the router at '/api'
```

<br>

--- 📄 Document End 🎉 -----