var mongoose= require("mongoose"); 

//POST - TItle, content
var postSchema = new mongoose.Schema({
   title:String,
   content:String
});

//module.exports allows us to break things into their own files
//reasons to do this: clean up our code & makes our code modular i.e. reuseable. 
module.exports = mongoose.model("Post", postSchema); 