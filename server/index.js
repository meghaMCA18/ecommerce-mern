const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/ecommerce');

app.post('/register', (req, res)=>{
    // To post / insert data into database

    const {name, email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.json(err))
        }
    })
    
})

app.listen(3001, () => {
    console.log("Server listining on http://localhost:3001");

});