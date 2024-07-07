
# Introduction to Mongoose for MongoDB 🦦

Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and Node.js. It simplifies the process of working with MongoDB by providing a schema-based approach to model data and interact with the database.

It provides a straightforward, schema-based solution to define data model of application data.

With Mongoose, developers can define schemas for their data and interact with MongoDB through a more structured and consistent API, while leveraging MongoDB’s flexibility

#### Why we use Mongoose

MongoDB is schema-less, which is liberating but potentially messy, so Mongoose helps to enforce a document data structure that makes it easier to store and manipulate information. 

The library comes with many built-in helper functions that allow us to quickly and easily perform basic CRUD operations (create, read, update, and delete.)


#### Terminology

- **Schema:** Defines the structure and constraints for documents in a collection. It is like a blueprint that define the structure and datatypes of your documents within a collection. 

- **Model:** Models take your schema and apply it to each document in its collection. Models are responsible for all document interactions like creating, reading, updating, and deleting (CRUD).

- **Document:** An instance of a model, representing a single record in the collection.


### How to use Mongoose

- **Installation:**
    ```javascript
    npm install mongoose
    ```

-  **Setting Up Mongoose:**
     ```javascript
    const mongoose = require('mongoose');
    const URI = 'mongodb://localhost:27017/test';

    function connectToMongoDB() {
        mongoose
            .connect(URI)
            .then(() => {
                console.log("Successfully Connected to MongoDB!!!");
            })
            .catch((error) => {
                console.log("Error connecting to MongoDB", error);
            });
    }

    connectToMongoDB();
    ```

- **Defining a Schema:**
    ```javascript
    const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        age: { type: Number, min: 0 },
        email: { type: String, required: true, unique: true }
    });
    ```

- **Creating a Model:**
    ```javascript
    const User = mongoose.model('User', userSchema);
    ```

### Perform Operations

- **Create data:**
    ```javascript
    const newUser = new User({
        name: 'Alice',
        email: 'johndoe@example.com',
        password: 'hashed_password',
    });

    newUser.save()
        .then((user) => console.log('User created successfully!', user**))
        .catch((error) => console.error(err));
    ```

- **Read data:**
    ```javascript
    User.find({ age: { $gt: 25 } })
        .then((users) => console.log('Users found:', users))
        .catch((error) => console.log('Find error:', error));
    ```

- **Update data:**
    ```javascript
    User.updateOne({ name: 'Alice' }, { $set: { email: 'alice_new@example.com' } })
        .then((result) => console.log('Update result:', result))
        .catch((error) => console.log('Update error:', error));
    ```

- **Delete data:**
    ```javascript
    User.deleteOne({ name: 'Alice' })
        .then((result) => console.log('Delete result:', result))
        .catch((error) => console.log('Delete error:', error));
    ```


### ORM Vs ODM 

ORM (Object-Relational Mapping) and ODM (Object-Document Mapping) are two techniques used to map data between object-oriented programming languages and databases.

#### what is ORM

At its core, Object-Relational Mapping (ORM) is a programming technique that allows you to interact with databases using objects in your preferred programming language. It bridges the gap between the way you work with data in your code (using objects) and how data is stored and organized in a relational database (using tables).

ORMs are commonly used to map between objects in the code and records in a relational database, allowing developers to use object-oriented programming to interact with relational data.

It allow developers to work with databases using high-level programming constructs rather than low-level SQL queries.

ORM acts as a translator between Objects and Relational Databases, allowing you to interact with your database using the familiar object-oriented programming (OOP) paradigm.

**Example:** Imagine you have a book store, and you want to manage the books and authors in your application. In a relational database, you might have two tables: "books" and "authors".

Without an ORM, you'd have to write raw SQL queries to interact with these tables.

```sql
SELECT * FROM books WHERE author_id = 5;
```

With an ORM like Django's ORM (for Python), you can work with objects that represent the data:

```python
# Python with Django ORM
author = Author.objects.get(id=5)
books = author.book_set.all()
```

<br>

**Popular ORM Frameworks:** Django ORM (Python), Hibernate (Java), Doctrine ORM (PHP), SQLAlchemy (Python), Laravel (PHP).

#### What is ODM

ODM is Object Document Mapping. It is like an ORM for non-relational databases or distributed databases such as MongoDB, i.e., mapping an object model and NoSQL database (document databases, graph database, etc.)

It allows developers to map objects in an application and documents in a document-oriented NoSQL database, abstracting the complexity of database interactions and making it easier to work with document-based data structures

It allowing developers to work with data as objects instead of raw JSON documents or collections.

Without an ODM, you'd have to work with the MongoDB driver and deal with raw database operations:

```javascript
// Raw MongoDB driver
db.books.find({ "author.name": "J.K. Rowling" });
```

<br>

With an ODM like Mongoose (for Node.js), you can define a schema that maps to the document structure, and then work with objects:

```javascript
// Mongoose ODM
const Book = mongoose.model('Book', { title: String, author: { name: String, age: Number } });
const books = await Book.find({ "author.name": "J.K. Rowling" });
```

**Popular ODM Frameworks:** Mongoose (for MongoDB and Node.js), MongoEngine (for MongoDB and Python), Doctrine (for MongoDB and PHP), Spring Data MongoDB (for MongoDB and Java)


<br>
<br>

**Refrence** [Mongoose](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/#update-data)
 
<br>

--- 📄 Document End 🎉 -----