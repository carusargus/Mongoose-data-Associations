var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/blog_demo");
//Above commented code produces err/ warning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
mongoose.connect('mongodb://localhost/blog_dem0', { useMongoClient: true });


//POST - TItle, content
var postSchema = new mongoose.Schema({
   title:String,
   content:String
});


var userSchema = new mongoose.Schema({
   email:String,
   name:String, 
   posts:[postSchema] //This is telling mongoose to make this an array of posts via PostSchema
});


var User= mongoose.model("User", userSchema ); 
var Post = mongoose.model("Post", postSchema); 

//Initially we had two models which were independent of each other 
//However we associated them by adding the postSchema inside of the UserSchema!
// We are ASSOCIATING by EMBEDDING  to establish relationships here 1 to M because 
// we are embedding an attribute called: posts into the user schema &
//since we are embedding the data we have to define the postSChema first else
//it wont know what we are talking about...The 2nd way to associate data is by
//using OBJECT REFERENCES 


//USER- email, name



//Comment out or change attributes else you will have duplicates in the DB 
// var newUser = new User({
//     email:"dog@gmail.com",
//     name:" Pupper fluff "
// }); 



// newUser.save(function(err, user){
//   if(err){
//       console.log(err);
//   }else{
//       console.log(user); 
//   }
// });

// newUser.posts.push({
//     title: "How to smell other puppers ",
//     content: "very carefully"
// });


// var newPost = new Post({
//     title:"Is the dogoo the best?",
//     content:"YES they truely are"
// });

//Familar pattern:Any time we do anything with mongoose Call back function 1st error, data 
// newPost.save(function(err, post){
//   if(err) {
//       console.log(err);
//   }else{
//       console.log(post); 
//   }
// });

User.findOne({name:" Pupper fluff "}, function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user); 
        user.posts.push({
            title:"Bacon bites",
            content:"Great fud"
        })
         user.save(function(err, user){
             if(err){
                 console.log(err);
             }else{
                 console.log(user); 
             }
         });
    }
});