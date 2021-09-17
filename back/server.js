var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const routes = require('./src/routes/routes');
var port = process.env.port || 8082;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://andre:bionic2021@cluster0.rglce.mongodb.net/apiBionic?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(routes);
app.listen(port);
console.log("Iniciando servidor na porta " + port);