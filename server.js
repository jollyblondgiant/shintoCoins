var express, app, bodyParser, server, session, flash, path

express = require('express')
app = express()
bodyParser = require('body-parser')
path = require('path')

app.use(bodyParser.json())

app.use(express.static(__dirname + '/shintoCoins/dist/shintoCoins'))

app.all("*", (req,res,next)=>{
    res.sendFile(path.resolve("./shintoCoins/dist/shintoCoins/index.html"))
})




server = app.listen(1337)