
const mongo = require('mongodb')
const MongoClient = mongo.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.log("Unable to connect to database!")
  }

  console.log('Connected correctly!')

  const db = client.db(databaseName)

  db.collection('users').insertOne({
    name: 'Gigi',
    age: 20
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert user')
    }
    console.log(result.ops)
  })

  db.collection('user').deleteOne({
    name: "Gigi"
  }).then((result) => {
      console.log("Deleted user")
      // console.log(result)
  }).catch((error) => {
      console.log("error in deletion")
      console.log(error)
  })
})
