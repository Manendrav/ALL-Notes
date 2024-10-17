
## Introduction to Pre and Post Hooks

In Mongoose, pre and post hooks (also known as middleware) allow you to execute functions before or after certain lifecycle events on a schema. This can be extremely useful for tasks such as validation, logging, or modifying data before saving it to the database. 

Middleware is specified on the schema level (means, where your schema is defined) and is useful for writing plugins.

for example, you want to run a function everytime before you save a document in the DB, we would you a pre-hook for that. If you want something to be executed afterwards – we would use the post hook.

**NOTE:** Always define pre and post hook before define the model and after schema.

I guess it’s not difficult to figure out that the post hooks are called once all the pre-hooks have been executed, then the original method has been executed.

```
pre-hooks -> method -> post-hooks
```

### Pre Hooks

Pre hooks are functions that run before a particular operation is executed. Common use cases include data validation, transformation, or ensuring certain conditions are met before proceeding with the operation.

Pre middleware functions are executed one after another, when each middleware calls `next`.

```js
var userSchema = new Schema(..);

 userSchema.pre('save', function(next) {
  // do stuff
  next();
});

const User = mongoose.model('User', userSchema);
```


### Post Hooks

Post hooks are functions that run after a particular operation is completed. They are often used for logging, sending notifications, or performing clean-up tasks.

Post hooks are a way to register traditional event listeners for these methods.

```js
userSchema.post('save', function (doc) {
  console.log(`User ${doc.username} has been saved.`);
});
schema.post('init', function(doc) {
  console.log('%s has been initialized from the db', doc._id);
});
schema.post('validate', function(doc) {
  console.log('%s has been validated (but not saved yet)', doc._id);
});
schema.post('remove', function(doc) {
  console.log('%s has been removed', doc._id);
});
```

### Middleware Operations

Same for Post hook.

- **pre('save'):** Runs before saving a document.
- **pre('validate'):** Runs before validating a document.
- **pre('remove'):** Runs before removing a document.
- **pre('updateOne'):** Runs before updating a single document.
- **pre('find'):** Runs before executing a find query.
- **pre('findOne'):** Runs before executing a findOne query.
- **pre('findOneAndUpdate'):** Runs before executing a findOneAndUpdate query.
- **pre('count'):** Runs before executing a count query.





<br>

---- 📄 Document End 🎉 -----