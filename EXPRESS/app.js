console.log ("OUR EXPRESS APP WILL GO HERE")

var express = require("express"); // initialize the express 
var app = express();              // save to the variable

// "/" => "hi there!"
app.get("/", function(request,response){ //define a single route 
    response.send("Hi there");           // when make get request, we see Hi there in back as response in the brownser
});
app.listen(3000, process.env.IP, function(){
    console.log ("server hassssss started!")
}); // to just define a route is not enough, so need to tell the app to listen in an particulary port and IP address 
// now just need to go to terminal and start the server 
// but first quit the node and oppened again
// to open this webpage , go to the brownse and type localhost:3000
//anytime that you make some changes you need restart the server.
//control C


// "bye" => "Goodbye!"

app.get('/bye' , function(request,response){
response.send("Goodbyeeeeeeee")
})
// "dogg" => "MEOW"
app.get('/dogggg',function(request,response){
    response.send("MEOW")
})

app.get("*", function(request,response){
    response.send("This is an error don't freak out") //this order matter , i can't put this app.get in the first line.
})                                                    // this is a line that prints an error if you dont write any pattern saved there. "*"

app.get ("/r/:subredditName" , function(request,response){
    response.send("this open an new page")
})