const mongoose = require("mongoose")

const Schema = mongoose.Schema;




mongoose.connect("")



const userSchema = new Schema({
    userName:{type:String,required :true},
    firstName : {type:String,required :true},
    lastName : {type:String,required :true},
    password :{type:String,required :true},
})

const accountSchema = new Schema({
  userId : {type:Schema.Types.ObjectId,ref:"Users",required:true},
  balance :{type: Number,required :true}
})


const Users = mongoose.model('User',userSchema);
const Account = mongoose.model('Account',accountSchema)

module.exports = {
    Users,
    Account
}


