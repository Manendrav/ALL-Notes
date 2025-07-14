
## MongoDB Atlas 🍃

MongoDB Atlas is a cloud-based Database-as-a-Service (DBaaS) offering from MongoDB Inc. It Provides capabilities that include automatic backups, protection controls, and seamless scalability.

Database-as-a-Service (DBaaS) is a service that allows you to set up, deploy, and scale a database without worrying about on-premise physical hardware, software updates, and the details of configuring for performance.

Atlas simplifies the deployment, management, and scaling of MongoDB databases in the cloud, allowing developers to focus on building applications without worrying about the underlying infrastructure.

**Analogy**

MongoDB Atlas cluster is like a team of librarians in a large library system that ensures data is organized, available, and easily accessible, even when some librarians are unavailable or when there are many visitors

### Terminology in MongoDB Atlas

**Cluster:** A cluster in MongoDB Atlas is a collection of MongoDB servers that maintain the same data set. Clusters can be deployed across multiple cloud regions and consist of replica sets or sharded clusters.

##### Types of Cluster

- **Replica Set:** Definition: A group of MongoDB servers that maintain the same data set, providing redundancy and high availability. It includes one primary node and multiple secondary nodes.

- **Sharded Cluster:** A partition of data in a sharded cluster. Each shard is a replica set that stores a subset of the data. Distributes data across multiple shards to support horizontal scaling.



### How to Setup Project in Mongodb Atlas

**Visit following link  ->   Create [Cluster](https://medium.com/@xuwei19850423/free-mongodb-cluster-on-mongodb-atlas-1443a87da347)**


**Watch the video  ->   Yotube [Video](https://www.youtube.com/watch?v=bl8AhdI1Dr8)**


### Now to connect our project with the Mongodb Atlas

While setting up the cluster in mongodb atlas you get a connection string something like this:

```bash
mongodb+srv://<username>:<password>@<clusterName>.mongodb.net/?retryWrites=true&w=majority

const uri = 'your-connection-string-here';
```

Now paste this connection string on the project url or `.env`. And restart the connection.

**NOTE:** Before making connection make sure your MongoDB server is running on the terminal. If not use the following command on the `cmd` or `terminal`.

```bash
mongod
```




<br>

--- 📄 Document End 🎉 -----
