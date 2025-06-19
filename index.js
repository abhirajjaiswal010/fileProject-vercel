import connectToMongo from "./Database/db.js";
import express from 'express'
import cors from 'cors';
import payment from "./routes/payment.js";
connectToMongo();
const app =express()
const port = 4000
//middleware
app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
  res.send('abhiraj')
})
app.use('/api/payment',payment)

app.listen(port,()=>{
  console.log(`example app listening at http://localhost:${port}`);
  
})
