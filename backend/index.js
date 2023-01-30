import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from 'cors'

import postRoutes from './routes/route.js'

const PORT=process.env.PORT || 5000;
const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(express.json());
app.use(cors());

const dbname="brainiac";
const CONNECTION_URL=`mongodb://localhost:27017/${dbname}`;
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log(`mongoose connected`)))
.catch((error)=>console.log(error.message))

app.use('/brainiac',postRoutes);