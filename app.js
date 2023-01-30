const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", function (req, res) {
    res.render('login')
})


app.post("/login", function (req, res) {
    const username = req.body.username
    const password = req.body.password

    if(username == 'aditya' && password == 'aditya')
    {
        res.render("main")
    }
    else
    {
        res.render("error")
    }


})

app.listen(3000, function () {
    console.log("Server is running on port 3000")
})