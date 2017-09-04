//acount char 11

module.exports = function(app, db) {
  app.post("/accounts/id", (req, res) => {
    db.collection("accounts").findOne({username: req.body.username}, (err, item) => {
      if (err) {
        res.send({'error ' : 'you suck'})
      } else {


        res.send(item._id)
      }
    })
  })
  app.post('/accounts/signup', (req, res) => {
    const info = { username : req.body.username, password : req.body.password}
    if(info.username.length > 11) return res.send({'error': 'username over char limit'})
    var thing = false
    db.collection('accounts').findOne({username: req.body.username}, function(err, doc) {
      if(doc) {
      return res.send({'error' : 'account with name exists'})
    } else {
      if(req.body.username.includes(" ")) return res.send({"error": 'username cannot contain spaces'})
      if(req.body.password.includes(" ")) return res.send({"error": 'password cannot contain spaces'})
      if(req.body.username === "") return res.send({'error': 'username can not be blank'})
      if(req.body.password === "") return res.send({'error': 'password can not be blank'})
      db.collection('accounts').insert(info, (err, result) => {
        if (err) {
          res.send({'error': 'Its broke eat a cactus'})
        } else {

          res.send(result.ops[0])
        }
      })
    }
    })



  })
  app.post('/accounts/signin', (req, res) => {
    const info = { username : req.body.username, password:req.body.password}
    db.collection('accounts').findOne(info, function(err, result) {
      if(result) {
        return res.send(result)
      } else {
      return  res.send({"error": "could not log in "})
      }
    })
  })

 {

  }

}
