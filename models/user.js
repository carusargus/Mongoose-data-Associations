var mongoose =require("mongoose"); 

var userSchema = new mongoose.Schema({
   email:String,
   name:String, 
   posts:[   //an array of Objects with two main properties 
      {
         type: mongoose.Schema.Types.ObjectId,  //mongoose syntax for id
         ref:"post"  
         
      } 
   ]
});

//when we require this file, this is the one thing we are sending out what we are exporting out to use  
module.exports= mongoose.model("User", userSchema ); 
