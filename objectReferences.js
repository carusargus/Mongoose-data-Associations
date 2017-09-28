//Initially we had two models which were independent of each other see embed.js file:
//However we associated them by adding the postSchema inside of the UserSchema!
// We are ASSOCIATING by EMBEDDING  to establish relationships here 1 to M because 
// we are embedding an attribute called: posts into the user schema &
//since we are embedding the data we have to define the postSChema first else
//it wont know what we are talking about...The 2nd way to associate data is by
//using OBJECT REFERENCES 

//Referencing data here we will reference an ID which will reference the actual post
//rather than actually embedding the entire post 

var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/blog_demo_2");
//Above commented code produces err/ warning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
mongoose.connect('mongodb://localhost/blog_demo_2', { useMongoClient: true });

var Post = require("./models/post")
var User = require("./models/user")







//Comment out or change details so as Not to have duplicates of same in DB 
//User.create({
//    email:"rgsamplesCarusArgus@gmail.com",
//    name:"Richard Cervantes Samples "
// });



// Example that works but is known as CALL BACK HELL! 
Post.create({
   title:"I love Doggos part 4",
   content:"blha blah blah blah!!!!"
}, function(err, post){
   if(err){
      console.log(err);
   }else{
      User.findOne({email:"rgsamplesCarusArgus@gmail.com"}, function(err, foundUser){
         if(err){
            console.log(err);
         }else{
            foundUser.posts.push(post); 
            foundUser.save(function(err, data){
               if(err){
                  console.log(err);
               }else{
                  console.log(data); 
               }
               
            });
         }
      });
   }
   
});

//Find user, then find all posts of said user 
// User.findOne({email:"rgsamplesCarusArgus@gmail.com"}).populate("posts").exec(function(err, user){
//    if(err){
//       console.log(err);
//    }else{
//       console.log(user);
//    }
// })