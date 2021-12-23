import express from 'express';
import apis from './routes'
import cors from 'cors'

const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json());
app.use('/api', apis)

app.listen(process.env.PORT, () => {
console.log(`Server runing on port ${process.env.PORT}`)});