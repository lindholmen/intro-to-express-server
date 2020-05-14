const express = require('express');
const app = express();
const bodyParser = require('body-parser');

middleware = bodyParser.urlencoded({extended:true});
app.use(middleware);

app.get('/', (req, res) => res.sendFile(__dirname+ "/index.html"));

app.post('/',(req,res) => {
    var number1 = Number(req.body.num1);
    var number2 = Number(req.body.num2);
    var sum = number1+number2;
    res.send("The calculation results is : " + sum);
});

app.get('/bmicalculator', (req,res) => {
    res.sendFile(__dirname+"/bmicalculator.html");
})

app.post('/bmicalculator', (req,res) =>{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var BMI = weight/ (height * height);
    res.send("The BMI is "+ BMI.toFixed(2));
})

const port = 3000;
app.listen(port,()=>console.log("Example app listenining on port " + port));