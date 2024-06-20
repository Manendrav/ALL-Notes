
# Introduction to MongoDB Shell 👾

MongoDB Shell, often referred to as mongosh, is a command-line interface (CLI) tool provided by MongoDB to interact with MongoDB databases. 

It allows users to perform various database operations, such as querying data, managing databases, collections, and documents, and running administrative commands.

Users can write scripts using JavaScript and execute them within the mongosh environment for automating repetitive tasks or performing complex operations

### Basic Commands 

1. **Connecting to a MongoDB Instance:** Connects to a MongoDB instance.

    ```shell
    $ mongosh
    ```

2. **Listing Databases:** Displays a list of databases.

    ```shell
    $ show databases
    ```

3. **Switching Databases:** Switches to the specified database.
    
    ```shell
    $ use <database_name>
    ```

4. **Listing Collections:** Displays a list of collections in the current database

    ```shell
    $ use show collections
    ```

### Perform Operations on Database

1. **Create a Database:** 
    In SQL:
    ```sql
    CREATE DATABASE <database_name>;

    CREATE DATABASE mydb;              // Example
    ```

    In MongoDB:

    ```shell
    $ use <database_name>
    
    $ use mydb              # Example
    ```

2. **Create a Table (Collection in MongoDB):**
    In SQL:
    ```sql
    CREATE TABLE users (
       user_id INT PRIMARY KEY,
       first_name VARCHAR(50),
       last_name VARCHAR(50),
        ...
    );
    ```

    In MongoDB:

    ```shell
    $ db.createCollection("<collection_name>");
    
    $ db.createCollection("users");              
    ```

3. **Inserting Documents:** Inserts a single document into the specified collection.
    In SQL:
    ```sql
    INSERT INTO users (id, name, ...)
    VALUES (2, Jhon, ...);
    ```

    In MongoDB:

    ```shell
    $ db.<collection_name>.insertOne(<document>)        # Inserts a single document
    $ db.<collection_name>.insertMany(<array_of_documents>)     # Inserts multiple documents
    
    $ db.users.insertOne({ name: "John", age: 25 });   
    $ db.users.insertMany([
        { "name": "Alice", "age": 30 },
        { "name": "Bob", "age": 25  },
        ...
    ]);          
    ```


4. **Querying Documents:** Retrieves documents from the specified collection.

    In SQL:
    ```sql
    SELECT * FROM users WHERE id = 1;
    ```

    In MongoDB:

    ```shell
    $ db.<collection_name>.find(<query_filter>)
    
    $ db.users.find({ age: { $gt: 20 } });              
    ```

5. **Updating Documents:** Updates a document in the specified collection
    In SQL:
    ```sql
    UPDATE users SET name = "Bose" WHERE id = 1;
    ```

    In MongoDB:

    ```shell
    $ db.<collection_name>.updateOne(<filter>, <update>)
    $ db.<collection_name>.updateMany(<filter>, <update>)
    
    $ db.users.updateOne({ name: "John" }, { $set: { age: 26 } });   
    $ db.users.updateMany(
        { "age": { $gt: 25 } },  // Filter: Select users older than 25
        { $set: { "status": "active", "name" : 'Alice'} }  // Update: Set status to "active"
    );           
    ```

6. **Deleting Documents:** Deletes a document from the specified collection.
    In SQL:
    ```sql
    DELETE FROM users WHERE id = 2;
    ```

    In MongoDB:

    ```shell
    $ db.<collection_name>.deleteOne(<filter>)
    $ db.<collection_name>.deleteOne(<filter>)
    
    $ db.users.deleteOne({ name: "John" });   
    $ db.users.deleteMany({ "status": "inactive" }); 
    ```

7. **Aggregation Pipeline:** Performs aggregation operations on the documents.The aggregation framework allows for complex data processing and transformation.
    ```shell
    db.<collection_name>.aggregate(<pipeline>)

    db.users.aggregate([
       { $match: { status: "complete" } },
       { $group: { _id: "$productId", totalQuantity: { $sum: "$quantity" } } }
    ]);
    ```

8. **Index Management:** Indexes support the efficient execution of queries. MongoDB supports single field, compound, multi-key, text, and geospatial indexes.
    ```shell
    db.<collection_name>.createIndex(<index_specification>)

    db.users.createIndex({ name: 1 });
    ```

9. **Administrative Commands:** Executes administrative commands on the MongoDB instance.
     ```shell
    db.adminCommand(<command>)
    ```



<br>

--- 📄 Document End 🎉 -----