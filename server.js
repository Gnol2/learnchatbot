const express = require('express');

const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const port = 4001;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/df/server',(req,res)=>{
    res.send('ahihi')
})

require('./routes/df.route')(app)

app.listen(port,()=>{
    console.log('server is running')
})