# Architecture of Node JS ⚙️

Node.js uses the “Single Threaded Event Loop” architecture to handle multiple concurrent clients. Node.js Processing Model is based on the JavaScript event-based model along with the JavaScript callback mechanism.


## Blocking Operation

Blocking code is synchronous, meaning each operation must complete before the next one starts. In a blocking operation, the program waits until the operation is finished before moving on to the next task. This can lead to inefficiencies, especially in I/O-bound applications.

Blocking operations are synchronous, and they can lead to performance issues if they take a long time to complete (e.g., reading a large file from disk, making a network request).

```
const fs = require('fs');

// Blocking code
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

console.log('This will only log after the file is read');
```

## Non-Blocking Operation

Non-blocking code, on the other hand, is asynchronous. It allows multiple operations to be performed concurrently without waiting for each operation to complete before moving on. This improves the overall throughput and responsiveness of the application, especially in I/O-bound scenarios.

Non-blocking operations are asynchronous and often use callbacks, promises, or async/await syntax to handle completion events.

```
const fs = require('fs');

// Non-blocking code
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('This logs immediately, even before the file is read');
```

## Parts of the Node.js Architecture

- **Requests:** Incoming requests can be blocking (complex) or non-blocking (simple), depending upon the tasks that a user wants to perform in a web application

- **Node.js Server:** Node.js server is a server-side platform that takes requests from users, processes those requests, and returns responses to the corresponding users

- **Event Queue:** Event Queue in a Node.js server stores incoming client requests and passes those requests one-by-one into the Event Loop

- **Thread Pool:** Thread pool consists of all the threads available for carrying out some tasks that might be required to fulfill client requests

- **Event Loop:** Event Loop indefinitely receives requests and processes them, and then returns the responses to corresponding clients

- **External Resources:** External resources are required to deal with blocking client requests. These resources can be for computation, data storage, etc.

### Architecture Image


## What is the Event Loop ?

The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations, even though JavaScript is single-threaded. It continuously monitors the call stack and the task queue, executing tasks in a loop.

### How the Event Loop Works ?

- **Start:** When you start a Node.js application, the event loop begins running immediately.

- **Execute Top-Level Code:** Node.js runs the top-level code, i.e., the code outside of any callbacks or asynchronous functions. This includes defining functions and scheduling asynchronous tasks.

- **Check Call Stack:** The event loop continuously checks if the call stack is empty.

- **Handle Completed Operations:** If the call stack is empty, the event loop checks the event queue for completed asynchronous operations and processes their callbacks.

- **Repeat:** The event loop continues this process indefinitely, or until the program ends (e.g., when there are no more callbacks to process).

### Event Loop Image



<br>
<br>

--- 📄 Document End 🎉 -----