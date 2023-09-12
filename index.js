const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bodyParser = require('body-parser');
const productRouter = require('./routes/productRoute');

const app=express()  
require("dotenv").config()


app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000 }));
app.use(cors()) 
app.use(express.json());  


app.use('/api/product', productRouter);
  
   
  
 
 

const PORT=process.env.PORT || 5000

const dburl='mongodb://0.0.0.0:27017/carbonwise'
/*const dburl='mongodb+srv://PRADEEP123:'+encodeURIComponent('password')+'@cluster0.x5jbf4w.mongodb.net/chat?retryWrites=true&w=majority'*/
/*const dburl=process.env.db_url*/
  

mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true       
  });
  
  mongoose.connection.on('connected', () => {    
    console.log('Successfully connected to MongoDB');      
  });
  

 
const server=app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${PORT}`)
})  

