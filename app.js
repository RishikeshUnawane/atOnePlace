const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const db = require('./config/mongoose');

const app = express()
app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

const  Task  = require('./models/task');

app.get("/", function (req, res) {
    res.render('login')
})


app.post("/login", function (req, res) {
    const username = req.body.username
    const password = req.body.password

    if(username == 'aditya' && password == 'aditya')
    {
        Task.find({}, function(err, task){
            if(err){
                console.log('Error in fetching tasks from db');
                return;
            }
    
            return res.render('home', {
                tittle: "Home",
                task: task
            });
        }
    )
    }
    else
    {
        res.render("error")
    }
})









app.get('/login', function(req, res){
    Task.find({}, function(err, task){
        if(err){
            console.log('Error in fetching tasks from db');
            return;
        }

        return res.render('home', {
            tittle: "Home",
            task: task
        });
    }
)});


// creating Tasks
app.post('/create-task', function(req, res){
  //  console.log("Creating Task");
    
    Task.create({
        description: req.body.description,
        link: req.body.link
        }, function(err, newtask){
        if(err){console.log('error in creating task', err); return;}
        

        //console.log(newtask);
        return res.redirect('back');

    });
});


// deleting Tasks
app.get('/delete-task', function(req, res){
    // get the id from query
    var id = req.query;

    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    for(let i=0; i < count ; i++){
        
        // finding and deleting tasks from the DB one by one using id
        Task.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('error in deleting task');
            }
        })
    }
    return res.redirect('back'); 
});





app.listen(3000, function () {
    console.log("Server is running on port 3000")
})