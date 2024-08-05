
//ROUTING
const express = require("express");

const app = express();
const mysql =require("mysql2");
const config=require("./config");
let connection =mysql.createConnection(config.db);
connection.connect(function (err){
    if(err){
       return  console.log(err);
    }

    connection.query("select * from blog",function(err,result){
        console.log(result[0].başlık);
        console.log(result[1].başlık);
    });
    console.log("mysql server bağlantısı ypıldı");
})
const path =require("path");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

 app.use("/libs", express.static(path.join(__dirname, "node_modules")));
 app.use("/static", express.static(path.join(__dirname, "public")));

 app.use("/admin", adminRoutes);
 app.use(userRoutes);
 
 

// app.use("/blogs/:blogid", function(req, res) {
//     // console.log(req.params.blogid);
//     // console.log(req.params.username);
//     console.log(__dirname);
//     console.log(__filename);
//     res.sendFile(path.join(__dirname,"views/users","blog-details.html"))
// });

// app.use("/blogs", function(req, res) {
//     res.sendFile(path.join(__dirname,"views/users","blogs.html"))
// });

// app.use("/", function(req, res) {
//     res.sendFile(path.join(__dirname,"views/users","index.html"))
// });


app.listen(3000, function() {
    console.log("listening on port 3000");
});
//MIDDLEWARE
// const express = require("express");

// const app = express();

// app.use(function(req, res, next) {
//     console.log("middleware 1");
//     next();
// });

// app.use(function(req, res, next) {
//     console.log("middleware 2");
//     next();
// });

// app.use(function(req, res) {
//     console.log("middleware 3");
//     res.send("<h1>homepage</h1>");
// });

// app.listen(3000, function() {
//     console.log("listening on port 3000");
// });