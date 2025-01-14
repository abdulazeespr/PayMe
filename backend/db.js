const mongoose = require("mongoose")

const Schema = mongoose.Schema;


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://abdulazeespr:ly3P5902bfkSYxLZ@payme.9n8ib.mongodb.net/PayMe");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new Schema({
    userName:{type:String,required :true},
    firstName : {type:String,required :true},
    lastName : {type:String,required :true},
    password :{type:String,required :true},
})


const Users = mongoose.model('User',userSchema);

module.exports = {
    Users
}


