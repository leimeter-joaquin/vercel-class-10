

import dotenv from 'dotenv'
dotenv.config()

import express from 'express';

const app = express();
app.use(express.json())

app.listen(4000, () => console.log(`server listening on port ${process.env.PORT}`))

app.get('/', (req, res) => res.json({message: 'grettings'}))
