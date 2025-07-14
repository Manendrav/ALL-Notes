
## Authentication (verifying identity)

Authentication is the process of verifying the identity of a user or system. It determines whether someone is who they claim to be. This usually involves checking credentials such as usernames, passwords, or other forms of identification.

`Example:` When you log into an email account by entering your username and password, you are undergoing authentication.

`Analogy:` Authentication is like showing your ID card to enter a building. It proves you are who you say you are.


**Common methods of authentication include:**

- **Password-based Authentication:** Users provide a username and password.

- **Token-based Authentication:** Users are given a token (like a JSON Web Token) after initial login, which they use to access protected resources.

- **Multi-Factor Authentication (MFA):** Combines two or more independent credentials (e.g., password and a verification code sent to a phone).

- **Biometric Authentication:** Uses physical characteristics such as fingerprints or facial recognition.



#### Types of Authentication

**Statefull Authentication:** It involves storing session information on the server. This method relies on the server keeping track of each session's state.

**Stateless Authentication:** Stateless authentication stores the user session data on the client side (browser). The data is signed by the key(tokens) of Id to ensure the integrity and authority of the session data. 



#### Authentication middlewares

It is a component in a web application framework that intercepts HTTP requests to verify the identity of a user before allowing access to protected resources.

**Passport.js**: It is a popular authentication middleware for Node.js. It provides a comprehensive set of tools and strategies for implementing authentication in web applications. 

- It simplifies the process of authenticating users by providung a ser of pre-built strategies for different authentiation methods like local username/password login, OAuth, OpenID, and more.

**Core Concepts:**

1. **Strategies:** Passport.js uses various strategies to handle different authentication mechanisms. A strategy is essentially a set of rules and methods for authenticating users. Common strategies include passport-local, passport-jwt, passport-google-oauth20, etc.

2. **Middleware** Passport.js integrates with the Express middleware pipeline, allowing you to plug it into your application easily. Means, Passport JS act as middleware, intercepting requests and adding authentication-related functionality to them.

3. **Serialization and Deserialization:** In a session-based authentication system, user information is serialized to the session and deserialized when subsequent requests are made.

`Serialization:` The process of converting user information into a format that can be stored in a session. Typically, this involves storing a user ID or a unique identifier.

`Deserialization:` The process of retrieving user information from the session storage using the serialized data (like a user ID) and reconstructing the user object for use in the application.

<br>

## Authorization (Access Control)

Authorization is the process of determining whether a user has permission to perform a specific action or access a resource. This happens after successful authentication. It specifies the permissions and access levels a user has after they have been authenticated.

`Example:` After logging into your email account (authentication), authorization determines whether you can read, delete, or send an email.

`Analogy:` Authorization is like having different access rights within the building (e.g., some people can enter the server room, others cannot).

**Common methods of authorization include:**

- **Role-Based Access Control (RBAC):** Permissions are assigned to roles, and users are assigned roles, giving them the permissions associated with those roles.

- **Attribute-Based Access Control (ABAC):** Access is granted based on user attributes (e.g., department, job title).

- **Access Control Lists (ACLs):** Specific permissions are assigned to specific users for specific resources.

<br>

### Hashing

Hashing is a process of transforming data (like a password) into a fixed-size string of characters, which is typically a hash value or digest. This transformation is done using a hash function. 

Hashing is crucial in various computing applications, especially for security purposes, such as storing passwords, ensuring data integrity, and indexing data.

`bcrypt.js:` It is a JavaScript library used for hashing passwords. It provides a way to securely hash and verify passwords using the bcrypt hashing algorithm. This algorithm is designed to be computationally intensive, making it resistant to brute-force attacks.

**How bcrypt.js Works**

- **Salt Generation:** Generates a random salt value that is unique for each password hash.

- **Hashing:** Combines the password and the salt to produce a hashed password.

- **Verification:** Uses the same salt and hashing process to verify that a plaintext password matches a stored hash. 

`Hash:` The hashed output of the password and salt. This is what is stored in the database.

`Salt:` A random value added to the password before hashing. It ensures that identical passwords have different hashes.

<p align="center">
  <img src="../public/Hash-Salting.png" alt="Hash-Salting"/>
</p>

When password is hashed by `bcrypt.hash` it generates a random salt, hashes password along with the salt and produces a hashed password that incorporate both salrt and hashed value.

Whene you later want to verify a user's entered password during login, you use `bcrypt.compare`. This function internally extracts the salt from the stored hashed password and uses it to hash the entered password for comparison.

**How it Actually Verify the User**

<p align="center">
  <img src="../public/Verification.png" alt="Verification"/>
</p>


<br>


## Sessions or Tokens

Sessions or tokens are used to maintain user state and authenticate users to ensures only authorized users can access restricted areas or perform certain actions.

### Sessions 

Sessions are a way to store data on the server that can be used to track user interactions across multiple requests. Sessions are commonly used in web applications to keep track of user state, such as login status, preferences, and other data that needs to persist between HTTP requests.


#### Session based Authentication

In this approach, the server stores session data on behalf of the user and issues a session ID, which is stored on the client side, typically in a cookie. The session ID is sent back to the server with each request, allowing the server to retrieve the associated session data and authenticate the user.

**How It Works:**

1. The users sends login request to the server.

2. The server authenticate the login request, sends a session to the database and returns a cookie containg the session ID to the user.

3. Now, the user sends new requests (with Cookie / session ID)

4. The server checks in the database for the Id Found in the cookie, if the Id is found it sends the requested page back to the user .


<p align="center">
  <img src="../public/session-authentication.png" alt="session-authentication"/>
</p>


`Session Id:` A session ID is a unique identifier that a server assigns to a user session. This ID is used to track the user's session across multiple interactions with a website, ensuring continuity and state management. 

Session IDs are typically stored in session cookies, which are sent back and forth between the user's browser and the server during each interaction.

<br>

#### Cookie 

A cookie is a small piece of data that a website stores on the user's computer. Cookies are used to remember information about the user browsing activity, navigating between web pages or visits to the website.

Authentication tokens are stored on the cookies which send to the server in each request by the user.  

**How Cookies Work:**

- **Creation:** When you visit a website for the frist time, the website may send a small text file (Cookie) to your browser.

- **Storage:** Your browser stores the cookie on your computer or device. Each cookie is associated with a specific website and contain information such as a unique identifier and any data the website wants you to remember.

- **Sending with Requests:** When you revisit the website or navigate to different pages on the same site, your browser automatically includes the cookie in the HTTP requests it sends to the website's server.

- **Server Processing:** The website's server receives the cookie along with the request It can then read the cookie to retrieve the stored information about you.

- **Usage:** Websites use cookies for various purposes, such as remembering your login status. storing your preferences. tracking your activities for analytics purposes. and personalizing your browsing experience.


**Types of Cookies:**

1. **Session Cookies:** These cookies are temporary and are deleted when you close your browser They are often used for maintaining your login state during a browsing session.

2. **Persistent Cookies:** These cookies are stored on your device for a specified duration, even after you close your browser. They can be used for purposes such as remembering your preferences or login information across multiple visits to a website.

3. **Third-party Cookies:** These cookies are set by domains other than the one you are visiting directly. They are often used for tracking and online advertising purposes, such as re-targeting or tracking user behavior across different sites.

4. **Domain-Specific Cookies:** These cookies that are restricted to a particular domain or subdomain. They can only be accessed by the domain that set them, ensuring that other domains cannot read or manipulate their data. This is an important security feature that helps maintain the privacy and integrity of the data stored in cookies.

**Purpose of the cookie-parser**

The middleware will parse the Cookie header on the request and expose the cookie data as the property `req.cookies` and, if a secret was provided, as the property `req.signedCookies`. These properties are name value pairs of the cookie name to cookie value.

**Signed Cookies:** Signed cookies are cookies that are hashed with a secret key, ensuring their integrity. If a cookie is tampered with, it will not validate against the secret key.

```js
const cookieParser = require('cookie-parser');
const app = express();

// Use cookie-parser middleware
app.use(cookieParser());

// for signed cookies
const secretKey = 'mySecretKey';

// Use cookie-parser middleware with a secret key for signed cookies
app.use(cookieParser(secretKey));
```

You can set cookies in your route handlers using `res.cookie`

```js
// Set a simple cookie
res.cookie('name', 'value');

// Set a signed cookie
res.cookie('signed_name', 'signed_value', { signed: true });
```

<br>

### Tokens

Tokens are a method for securely transmitting information between parties and are commonly used in web applications for authentication and authorization. 

Unlike sessions, which store user data on the server and track user interactions, tokens store user data within the token itself, allowing for stateless authentication.

`tokens:` A string of characters representing a set of claims (information) that can be used to authenticate and authorize users.


**Stateless Authentication:** The server does not store user state; instead, the token contains all the necessary information for authentication. This reduces server load and simplifies horizontal scaling.


#### Token based Authentication

A token is an authorization file that cannot be tampered with. It is generated by the server using a secret key, sent to and stored by the user in their local storage. Like in the case of cookies, the user sends this token to the server with every new request, so that the server can verify its signature and authorize the requests.

**How It Works:**

1. The user sends a login request to the server.

2. The server authorizes the login and sends a token to the user.

3. Now, the user sends a new request(with a token).

4. The server checks whether the token is valid or not, if the token is valid it sends the requested pages to the user.

<p align="center">
  <img src="../public/tokens.avif" alt="Token Authentication"/>
</p>

**Difference Between Session & Token**

<p align="center">
  <img src="../public/Session&Token.png" alt="Difference Session or Token"/>
</p>


<br>

### JSON Web Token (JWT)

JSON Web Token (JWT) is a standard for creating digitally signed web tokens that contain JavaScript Object Notation (JSON) data. A server creates a token that proves the client's identity and sends it to the client. JWT uses digital signatures to prove the token is legitimate.

JWTs are stateless, meaning the server does not need to store session information. This makes them suitable for distributed architectures and scalable systems. 

Want Know in Depth About it Visit - Article [Article](https://dev.to/kimmaida/signing-and-validating-json-web-tokens-jwt-for-everyone-25fb)

**JWTs include three components:**

A JWT is composed of three sections separated by dots (.)

```
header . payload . signature
```

1. **Header:**  Contains metadata about the type of token and the cryptographic algorithms used to secure it. It typically consists of two parts:

- **typ (Type):** Specifies the type of token. usually set to "JWT".

- **alg (Algorithm):** Indicates the cryptographic algorithm used to sign the token. such as ( HMAC, SHA256 or RSA).


2. **Payload:** Any JSON data can go here. JWT payloads for authentication include claims about the user's identity in the payload. Claims are categorized into three types:

- **Reserved Claims:** Predefined claims standardized by the JWT specification, such as iss (issuer), sub (subject). aud (audience). exp (expiration time). and iat (issued at).

- **Public:** Custom claims defined by the application developer to convey information about the user.

- **Private:** Custom claims agreed upon by parties that exchange JWTs. not registered or standardized.


3. **Digital signature:** Verifies the integrity of the token and ensures that it has not been tampered with during transmission. It's created by taking the encoded header, encoded payload. a secret (for HMAC algorithms). and applying the specified algorithm to generate the signature.

#### JWT sign() and verify() function

`jwt.sign():` JWT sign method is used to creating a token the take are three arguments one is a response object (payload), and the second one is a secret key and the last one is an options object for better use of the token.

```js
jwt.sign({data_obeject}, "secret_key", {Options})

// Example
const token = jwt.sign(payload, secret, { expiresIn: '1h' });
```

`jwt.verify():` JWT verify method is used for verify the token the take two arguments one is token string value, and second one is secret key for matching the token is valid or not. The validation method returns a decode object that we stored the token in.

```js
jwt.verify(token_value, 'secret_key');
```


<br>

<p align="center">
  <img src="../public/JWT-Token.png" alt="JWT-Token"/>
</p>

**How it Actually Work**

<p align="center">
  <img src="../public/JWT-Flow.png" alt="JWT-flow"/>
</p>

<p align="center">
  <img src="../public/JWT-auth-flow.svg" alt="JWT-auth-flow"/>
</p>

<br>

#### Bearer Authentication

Bearer authentication, commonly referred to as token-based authentication, is a security mechanism where the client sends a token (bearer token) to the server to authenticate themselves. This token acts as proof of the client's identity and permissions. 

It is called "bearer" because the client must present ("bear") the token to gain access to protected resources.

The bearer token is a cryptic string, usually generated by the server in response to a login request. The client must send this token in the Authorization header when making requests to protected resources.

```
Bearer <token>

// Example:
Bearer jafyf7sd78f28r0934rfoe3wnf24gvg2reg&^dfwf42fsffd403
```

<br>

**How Bearer Authentication Works:**

1. The user logs in by providing their credentials (e.g., username and password) to the authentication server.

2. The server sends the bearer token to the client. The client stores this token, typically in local storage or a secure HTTP-only cookie.

3. For each subsequent request to protected resources, the client includes the bearer token in the Authorization header

4. The server receives the request and extracts the token from the Authorization header. The server validates the token's signature and checks its expiration and claims


### Client Storage Options

Client storage options refer to various ways that data can be stored on the client side (i.e., in the user's web browser) rather than on the server.

1. **Cookies Storage:** Cookies received from the server are typically stored in the "Cookies" storage of your browser. These cookies can include session cookies. which are deleted when you close your browser, and persistent cookies, which are stored for a longer period.

2. **Local Storage:** Local storage is a mechanism that allows web applications to store data locally in the browser. Unlike cookies, data stored in local storage is not automatically sent to the server with every request. This storage option is often used for caching data, storing user preferences, or implementing client-side features.

3. **Session Storage:** Session storage is similar to local storage but is scoped to a particular browsing session. Data stored in session storage is cleared when you close the browser or tab. It's commonly used for temporary data storage or for maintaining a state within a single browsing session.


<br>

--- 📄 Document End 🎉 -----

