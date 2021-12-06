import express from 'express';
import apis from './routes'

const app = express()
require('dotenv').config()

app.use(express.json());
app.use('/api', apis)

app.listen(process.env.APP_PORT, () => {
console.log(`Server runing on port ${process.env.APP_PORT}`)
})