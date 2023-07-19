import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import {connectDB} from './Config/DBconnection.js'
import Router from './Routes/Router.js'
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use('/book',Router)

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => { 
    console.log(err);
  });