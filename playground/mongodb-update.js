// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59b4327716fe3153ea4d291d')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59b42a7c2137ce24e4208496')
  }, {
    $set: {
      name: 'Mario'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  //db.close();
});
