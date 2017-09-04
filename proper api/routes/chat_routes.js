

module.exports = function(app, db) {
  app.post("/messages/send", (req, res) => {
    const message = {time: req.body.timestamp, user: req.body.username, message:req.body.message}
    const user = {username: req.body.username, password: req.body.password}
    db.collection("accounts").findOne(user, (err, result2) => {
     if(err) {
       res.send({'error' : 'This account doesnt exist'})
     } else {
       db.collection("messages").insert(message, (err, result) => {
         if(err) {
           res.send({'error' : 'An error occured'})

         } else {
           res.send(result.ops)
         }
       })
     } {

     }
    })

  })
  app.post("/messages/new", (req, res) => {
    
  })
}
