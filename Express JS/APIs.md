
# Introduction to API (Application Programming Interfaces) 🧑‍🚀

An API, which stands for application programming interface, is a set of protocols that enable different software components to communicate and transfer data.

API helps two programs or applications to communicate with each other by providing them with the necessary tools and functions. It takes the request from the user and sends it to the service provider and then again sends the result generated from the service provider to the desired user. 

### How do APIs Work ?

Think of a client-server architecture where the client sends the request via a medium to the server and receives the response through the same medium.

1. The client initiates the requests via the APIs URI (Uniform Resource Identifier)
2. The API makes a call to the server after receiving the request
3. Then the server sends the response back to the API with the information
4. Finally, the API transfers the data to the client

<p align="center">
  <img src="../public/APIs.png" alt="APIs"/>
</p>

### Types of APIs

APIs are categorized by three factors:

#### Restrictions

1. **Private APIs:** These are the internal APIs that are only used within the company. They offer the highest level of access and allow those in the same work ecosystem to access data, edit functionalities, and see some backend complexity if they wish.

2. **Public APIs:** It sometimes called “Open APIs”, are available for use by the public in similar format to open source software. Most platform APIs like Microsoft or Apple’s API Cocoa are Public to allow developers to easily make apps on their platforms

3. **Partner APIs:** These are shared with specific external partners rather than being open to the public. They are designed for use by a specific group of external developers, often under strict terms and conditions.


#### API Protocols

1. **REST (Representational State Transfer):** It is primarily used to share documents in web services. REST applications are designed to prioritize the scalability of components and the simplicity of interfaces.

- Each request from the client to the server must contain all the information the server needs to fulfill the request.

2. **SOAP (Simple Object Access Protocol):** It’s a standard communication protocol that allows communication across different operating systems. It’s primarily used to create, update, and pull data from shared databases.

- It uses XML to transfer highly structured messages between a client and server.

3. **gRPC (gRPC Remote Procedure Calls):** It is designed to make API calls to server methods rather than share documents. In other words, REST APIs focus on pulling resources from the server to perform actions on the client-side, while RPC focuses on sending action requests for the server to perform. This leads to a more consistent experience but is not as scalable.


#### API types by architecture

1. **Monolithic APIs:** Most public APIs are monolithic APIs, meaning they are architected as a single, coherent codebase providing access to a complex data source. Monolithic APIs are familiar to most web developers, and they often closely follow the architecture of a relational database or MVC (model-view-controller) application. 

2. **Microservices APIs:** The main alternative to a monolith is a microservices API architecture, in which each API serves a narrow and specific purpose. This architecture is more common for internal and partner APIs, though public APIs may also be part of an organization’s overall microservices architecture. Most development teams using a CI/CD (continuous integration/continuous deployment) process make use of many microservices as part of their code lifecycle, each serving a discrete, independent purpose

3. **Composite APIs:** A composite API is a special API type that lets you hit multiple API endpoints on a single call. It’s not uncommon for APIs to include some overlapping data at different endpoints, and a composite API can streamline API calls by identifying the most efficient set of calls to deliver the necessary data.

4. **Unified APIs:** A unified API is similar to a composite API, but instead of bundling calls to multiple endpoints on a single API, it bundles related calls to multiple different APIs. Unified APIs are common among partner APIs. 



### What is Web API

Web API Is simply an API for the web. It is an API that can be accessed using the HTTP protocol. It can be built using Java, .NET, etc. It is implemented to extend the functionality of a browser, simplify complex functions, and provide easy syntax to complex code. 

#### Types of Web API

**REST (Representational State Transfer):** 

Uses standard HTTP methods (GET, POST, PUT, DELETE) and is stateless. It is the most common type of API for web services.

- The REST protocol defines routes with a URL … and that’s it. That simplicity is a big advantage compared to other protocols that require the developer to wrap routes with XML. 

- The drawback is that REST APIs can only transmit information through the HTTP protocol, which means they are limited to sending text and not much else.

##### Example 

```javascript
https://api.example.com           // Base URL

https://api.example.com/books     // Resource URL

// Response
{
  "id": 1,
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "year": 1960
}
```

<br>

**SOAP (Simple Object Access Protocol):** 

A SOAP API can communicate over other major internet communication protocols, such as TCP and SMTP, in addition to HTTP. SOAP APIs can only work with XML data and have much more rigid requirements for requests.

- A protocol for exchanging structured information in the implementation of web services. It uses XML as its message format.

##### How SOAP APIs Work

SOAP APIs involve communication between a client and a server using SOAP messages. The messages are XML documents that include:

- **Envelope:** Defines the start and end of the message.
- **Header:** Contains optional attributes for message processing.
- **Body:** Contains the request and response data.
- **Fault:** Contains error and status information if there's a fault.

##### Example 

```xml
<!-- Request for Get User -->
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:example:com:user">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:GetUserRequest>
         <userId>123</userId>
      </urn:GetUserRequest>
   </soapenv:Body>
</soapenv:Envelope>

<!-- Response for Get User -->
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:example:com:user">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:GetUserResponse>
         <user>
            <id>123</id>
            <name>John Doe</name>
            <email>johndoe@example.com</email>
         </user>
      </urn:GetUserResponse>
   </soapenv:Body>
</soapenv:Envelope>
```

<br>

**GraphQL:** 

GraphQL is a query language for APIs and a runtime for executing those queries against your data. GraphQL provides a flexible and efficient way for clients to request exactly the data they need from a server, avoiding the over-fetching or under-fetching problems often associated with REST APIs.

- GraphQL APIs typically have a single endpoint, but effectively unlimited data schemas available at that endpoint. The API user must know what data fields are available, but they can write a query that combines those fields in whatever order they want.

##### How GraphQL Works

- **Schema:** A schema defines the structure of the data available through the API, including types, queries, and mutations.

  ```javascript
  type Book {
    id: ID!
    title: String!
    author: Author!
    publishedYear: Int
  }

  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    addBook(title: String!, authorId: ID!, publishedYear: Int): Book
    updateBook(id: ID!, title: String, authorId: ID, publishedYear: Int): Book
    deleteBook(id: ID!): Book
  }
  ```
- **Queries:** Clients write queries to request specific data.

  ```javascript
  query {
    books {
      title
      author {
        name
      }
    }
  }
  ```

- **Mutations:** Clients use mutations to modify data on the server.
  ```javascript
  mutation {
    addBook(title: "The Great Gatsby", authorId: "2", publishedYear: 1925) {
      id
      title
    }
  }
  ```

- **Resolvers:** Functions that handle fetching and processing data for each field in the schema.
 
 
##### Response
  ```javascript
  {
    "data": {
      "books": [
        {
          "title": "To Kill a Mockingbird",
          "author": {
            "name": "Harper Lee"
          }
        },
        {
          "title": "1984",
          "author": {
            "name": "George Orwell"
          }
        }
      ]
    }
  }
  ```

<br>

**gRPC (gRPC Remote Procedure Calls)**

gRPC (gRPC Remote Procedure Calls) is a high-performance, open-source, universal RPC (Remote Procedure Call) framework initially developed by Google. It leverages HTTP/2 for transport, Protocol Buffers (protobuf) as the interface description language, and provides features like authentication, load balancing, and bidirectional streaming.

- A user on one side will select a remote procedure to execute, serialize the necessary parameters and then append any additional information into the message. This will then be sent to the server, which interacts with the other application, decoding the message and executing the operation. A result then comes back to the initial user.

##### How gRPC Works

gRPC is based on defining a service using `protobuf`. The service definition includes RPC methods and their request and response message types. The gRPC framework then generates client and server code from these definitions.

```protobuf
syntax = "proto3";

package library;

// Define the Book message type
message Book {
  int32 id = 1;
  string title = 2;
  string author = 3;
  int32 publishedYear = 4;
}

// Define the request and response types
message GetBookRequest {
  int32 id = 1;
}

message GetBookResponse {
  Book book = 1;
}

// Define the service
service LibraryService {
  rpc GetBook (GetBookRequest) returns (GetBookResponse);
  rpc CreateBook (CreateBookRequest) returns (CreateBookResponse);
}
```

The `.proto` file is compiled using the `protoc` compiler to generate client and server code in the desired programming languages.


<br>

**WebSockets**

This protocol providing full-duplex communication channels over a single, long-lived connection between a client (such as a web browser) and a server. Introduced as part of HTML5, WebSockets enable real-time, interactive communication, making them suitable for applications like live chat, online gaming, financial trading platforms, and real-time notifications.

##### How WebSockets Work

WebSockets begin with an HTTP handshake. Once established, the connection is upgraded from HTTP to WebSocket, and thereafter, data can be sent and received over the same connection in both directions until it is closed.

```http
// Client Request:
GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13

// Server Response
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

##### Example using JavaScript WebSocket API:

```js
// Create a WebSocket connection
const socket = new WebSocket('ws://example.com/chat');

// Handle connection open
socket.onopen = (event) => {
  console.log('WebSocket connection opened.');
  // Send a message to the server
  socket.send('Hello, Server!');
};

// Handle messages from the server
socket.onmessage = (event) => {
  console.log('Message from server:', event.data);
};

// Handle connection close
socket.onclose = (event) => {
  console.log('WebSocket connection closed.');
};

// Handle errors
socket.onerror = (error) => {
  console.log('WebSocket error:', error);
};
```


<br>

--- 📄 Document End 🎉 -----