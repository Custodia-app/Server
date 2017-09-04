//CHAT UNFINISHED.

//const chatRoutes = require("./chat_routes")
const accountRoutes = require('./account_routes');
module.exports = function(app, db) {
  accountRoutes(app, db);
  //chatRoutes(app, db)
}
