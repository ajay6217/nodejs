const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express();
const bodyparser=require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dance', { useNewUrlParser: true, useUnifiedTopology: true });
const port = 300;


const contactSchema = new mongoose.Schema({
    name: String,
    phone:String,
    email:String,
    address:String,
    concern:String

    
});



const Contact = mongoose.model('contact', contactSchema);


app.use('/static', express.static('static'))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params)
})

app.get('/contact', (req, res) => {
    
    const params = {}
    res.status(200).render('contact.pug', params)
})
app.post('/contact', (req, res) => {
    
    var mydata= new Contact(req.body);
    mydata.save().then(()=>{
        res.send(`<div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>`)
    }).catch(()=>{
        res.status(400).send("not saved")
    });
  
})


app.listen(port, () => {
    console.log(`this is my website ${port}`)
});