import dotenv from 'dotenv'
import express from 'express';

dotenv.config()
const app = express().use(express.json())

if(process.env.PORT) {
    app.listen(process.env.PORT, (err) => {
        console.log(`server listening on port: ${process.env.PORT}`)
    })
} else {
    console.log('No port provided')
    process.exit()
}

app.get('/', (req, res) => res.json({message: `You are ${process.env.MY_NAME} and the environment is ${process.env.VERCEL_ENV}`}))
