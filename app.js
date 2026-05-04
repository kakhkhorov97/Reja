// console.log("Web server is running. . .");
// const express = require("express");
// const app = express();
// const http = require("http");

// // 1 Kirish code

// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded ({extended: true}));

// // 2 Session code

// // 3 Views code

// app.set("views", "views");
// app.set("view engine", "ejs");

// // 4 Routing code

// app.get("/hello", function (req, res) {
//     res.end("Hello World!");
// });

// app.get("/gift", function (req, res) {
//     res.end("This is a gift for you!");
// });


// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function() {
//     console.log(`The server is runnig successfully on PORT ${PORT}`);
// });


console.log("Web server is running. . .");
const express = require("express");
const app = express();
const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error:", err);
//     }
//     else {
//         user = JSON.parse(data) 
//     }
// })

//MongoDB chaqirish 
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded ({extended: true}));

// 2 Session code

// 3 Views code

app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) =>  {
        console.log(data.ops);
       res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
 const id = req.body.id;
db.collection("plans")
.deleteOne({_id: new mongodb.ObjectId(id)}, function (err,data) {
    res.json({state:"success"})
})
});

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("reja", {items: data});
        }
    });
   
}); 



// app.get("/author", (req, res) => {
//     res.render("author", {user: user});
// });

module.exports = app;