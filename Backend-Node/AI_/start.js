var express = require('express')
var dotenv = require('dotenv')
var app = express()
var db = require('./config/db')
var login = require('./routes/login.js')
var register = require('./routes/register.js')



var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const PORT = process.env.PORT || 5000
dotenv.config()

app.listen(PORT)
console.log('Node listening on port %s', PORT)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express and MySQL' })
  })


app.post('/search', (req, res) => {
  let a = req.body.search;
  res.send(a)
   console.log(a)
})


