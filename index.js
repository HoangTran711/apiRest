const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const location = require('./routes/location');

const bodyParser = require('body-parser');
const fileStorage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'images')
    },
    filename:(req,file,cb) => {
        cb(null,new Date().toISOString() + '-' + file.originalname)
    }
})
const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null,true);
    } else {
        cb(null,false);
    }
} 
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})
app.use(multer({storage:fileStorage,fileFilter:fileFilter}).single('image'));
app.use('/',location);
app.use((err,req,res,next) => {
    const status = err.statusCode;
    const message = err.message;
    return res.status(status).json({
        message:message
    })
})

mongoose.connect('mongodb+srv://tranhoang:KoOn711286@cluster0.ditwt.mongodb.net/location?retryWrites=true&w=majority')
.then(res=>{
    app.listen(8080, () => console.log('app listening on port 8080'))
})
.catch(err => console.log(err))