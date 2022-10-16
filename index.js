import dotenv from 'dotenv'
import express from 'express';

dotenv.config()
const app = express().use(express.json())

app.listen(4000, () => console.log(`server listening on port ${process.env.PORT}`))

app.get('/', (req, res) => res.json({message: `You are ${process.env.MY_NAME} and the environment is ${process.env.VERCEL_ENV}`}))
