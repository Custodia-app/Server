//pass: c@ctusesaretasty
//char limit 17
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db')
const ObjectID       = require('mongodb').ObjectID
const port = 80;

app.use(bodyParser.urlencoded({ extended: true}))

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./routes')(app, database)

  app.listen(port, () => {
    console.log(`Live on port ${port}`)
  })

})
