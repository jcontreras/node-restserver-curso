
require('./config/config');

const express = require('express')
const bodyParser = require('body-parser')
const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/usuario', function (req, res) {
    res.json('Hello World - GET');
})

app.post('/usuario', function (req, res) {
    let body = req.body;

if(body.Nombre === undefined){
    res.status(400).json({
        msg : 'El Nombre es obligatorio'
    });
}else{
    res.json({
        persona : body
    });
}

})

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        "Nombre": "Hello World - PUT",
        id
    });
})

app.delete('/usuario', function (req, res) {
    res.json('Hello World - DELETE');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});