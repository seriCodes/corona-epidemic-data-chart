const mongoose = require ('mongoose')
const MarioChar = require('../models/mariochar')


/////
const path = require('path');
const express = require('express');
const favicon = require('express-favicon');

const app = express();
const buildPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(favicon(buildPath + '/favicon.ico'));
app.use(express.static(buildPath));
app.get('/ping', function (req, res) {
    return res.send('pong');
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => console.log(`server is up on port ${port}...`));
///////////
try {

    mongoose.connect('mongodb+srv://backgammonAdmin:sheshBesh@cluster0.o2lqj.mongodb.net/CODEdb?retryWrites=true&w=majority', { useNewUrlParser: true });
} catch (error) {
    console.log('initial connection error')
 
    console.log(error)
    handleError(error);
  }
  
mongoose.connection.once('open', function(){
    console.log('connection made')
 })

mongoose.connection.on('error', err => {
  logError(err);
});

var char = new MarioChar({
    name:"956"
})
char.save().then(function(){
    console.log('sucess saved')
    console.log(char.isNew==false)

})


async function getData(){
    console.log('getData')
    
    let result = await MarioChar.find({});
    
    console.log(result)
    }
    
    getData()
    

