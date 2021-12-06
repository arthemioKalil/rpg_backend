const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

const values = require('./values.js');

const Description = require('./models/Description');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// var allowedOrigins = ['http://localhost:3000',
//                       'https://forrpg.herokuapp.com/'];
// app.use(cors({
//   origin: function(origin, callback){

//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));


//rota
app.get("/", async (req, res) => {
    console.log("Backend!")
    res.json(values.descriptionJSON);
})

app.post("/description", async (req, res) => {
    console.log("Backend/description " + req.body)
    const descriptionText = req.body;

    console.log(descriptionText);
    values.descriptionJSON = descriptionText;

    await Description.create(req.body);

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(`Na porta: ${port} ||`);
});