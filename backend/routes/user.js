const express = require("express")
const z = require("zod")
const jwt = require("jsonwebtoken")
const {Users, Account} = require("../db")
const JWT_SECRET = require("../config")
const {authMiddleware} = require("../middleware")

const userRouter = express.Router()

const signupInput = z.object({
    username:z.string().email(),
    firstname:z.string(),
    lastname:z.string(),
    password:z.string(),
})

userRouter.post("/signup",async (req,res)=>{
   
   


  const {success} = signupInput.safeParse(req.body)

  if(!success){

     res.status(411).json({"message":"Email already taken / Incorrect inputs"})
     return 
  }


  const user = await Users.findOne({
    userName:req.body.username
  })

 if(user){
    res.status(411).json({"message":"Email already taken / Incorrect inputs"})
    return 
 }


  const newUser = await Users.create({
    userName:req.body.username,
    firstName:req.body.firstname,
    lastName:req.body.lastname,
    password:req.body.password

  })

   await Account.create({
    userId:newUser._id,
    balance:1000,
   })

  const token = jwt.sign({
    userId:newUser._id
  },JWT_SECRET )

  res.json({
    "message":"User created Successfully",
    token:token
  })




})

const signinInput = z.object({
    userName:z.string().email(),
    password:z.string(),
})

userRouter.post("/signin",async (req,res)=>{

const {success} = signinInput.safeParse({
    userName:req.body.username,
    password:req.body.password
})

  if(!success){

     res.status(411).json({"message":"Email already taken / Incorrect inputs"})
     return 
  }


  const user = await Users.findOne({
    userName:req.body.username,
    password:req.body.password
  })
  if(user){
   const token = jwt.sign({userId:user._id},JWT_SECRET)

     res.json({
        token:token
     })
     return
}
     res.status(411).json({
        message: "Error while logging in"
    })
    return


})


const updateInput = z.object({
  firstName:z.string(),
  lastName:z.string(),
  password:z.string()
})

userRouter.put("/",authMiddleware,async (req,res)=>{

  const {success} = updateInput.safeParse(req.body)
   if(!success){
    res.status(411).json({
      message:"Error while updating information"
    })
   }

  await Users.updateOne({
  _id :req.userId
  },req.body)

  res.json({
    "message" :"Updated successfully"
  })


})

userRouter.get("/bulk",async (req,res)=>{

const filter = req.query.filter || "";

const users = await Users.find({
  $or:[

   {
    firstName:{
      "$regex":filter
    }
   },
   {
    lastName:{
      "$regex":filter
    }
   }

  ]
})

res.json({
  user:users.map(user =>({
    userName:user.userName,
    firstName:user.firstName,
    lastName :user.lastName,
    _id:user._id
  }))
})

})

module.exports =  userRouter
