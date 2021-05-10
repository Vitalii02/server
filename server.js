const express = require('express')
const app = express()
const port = process.env.PORT || 3500
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extends:true}))
app.use(bodyParser.json())

const routers = require('./settings/routers')
routers(app)

app.listen(port, ()=>{
    console.log(`App listen port ${port}`)
})
