import express from 'express'
import cors from 'cors'

import OwnerRouter from './routes/OwnerRouter.js'
import SellerRouter from './routes/SellerRouter.js'
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const app = express()
const port =5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'https://pet-owner.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));


app.use(cookieParser());
app.get('https://pet-sitter-app-sand.vercel.app/', (req, res) => {
    res.send('Hello World!')
})
app.use(OwnerRouter)
app.use(SellerRouter)
app.use('/auth', authRoutes);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

const startServer = () => {
    try {
      connectDB(process.env.DATABASE_URL)
      
    } catch (err) {
      console.log(err)
    }
  }
  
  startServer();

export default app