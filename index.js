const express = require("express") //import express js
const app = express()  //instance of express in app
const bodyParser = require("body-parser") // Used to parse the body in the request
const cors = require('cors')

const port = 3000 //Where you want to host your API

const static = express.static("public");  

app.use(static)
app.use(bodyParser.json())  //To use body parser for JSON in request
app.use(cors())

var items = {
    "Limca": 30,
    "Pepsi": 40,
    "Coke": 35,
    "Red Bull": 20,
}
    
app.post("/", (req, res) => {

    try {
        let amt = req.body.amount;
        let drink = req.body.type;

        if (amt >= items[drink]) {
            var remaining = amt - items[drink]

            res.status(200).json({
                message: remaining
            })
        }

    } catch (error) {
        res.status(400).json({ message: "Enter the valid amount" })
    }

})

app.get("/", (req, res) => {
    res.send(items)
})

app.listen(port, () => {
    console.log("App listening at Port " + 3000)
})