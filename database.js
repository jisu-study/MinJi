//const mongoose = require("mongoose");
////mongoose.set("useNewUrlParser", true);
//
//class Database {
//  constructor() {
//    this.connect();
//  }
//
//  connect() {
//    mongoose
//      .connect(
//       "mongodb+srv://kmjmm4231:gEE3P2OlsLiyKvhY@webstudytrip.u4rmlw3.mongodb.net/?retryWrites=true&w=majority",
//        {
//          useNewUrlParser: true,
//          useUnifiedTopology: true,
//          // useFindAndModify: false,
//          useUnifiedTopology: true,
//        }
//      )
//      .then(() => {
//        console.log("database connection successful");
//      })
//      .catch((err) => {
//        console.log("database connection error " + err);
//      });
//  }
//}
//
//module.exports = new Database();
