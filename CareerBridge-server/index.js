import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import route from './routes/route.js'


const app = express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

const port = process.env.port || 4000
const mongoUrl = process.env.mongoUrl

mongoose.connect(mongoUrl).then(() => {
  console.log(`db connected successfully!`);

  app.get("/", (req, res) => {
    res.send(`<h1 align="center">The CarrierBridge Server Is Running:)</h1>`)
  })

  app.listen(port, () => {
    console.log(`carrierBridge Server Is Running On Port:http://localhost:${port}`);
  })
}).catch((err) => {
  console.log(`db not connected :${err}`);
});

app.use("/api", route)
