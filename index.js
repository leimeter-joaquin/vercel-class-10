import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express().use(express.json());

try {
  app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`server listening on port: ${process.env.PORT}`);
  });
} catch (err) {
  console.log("There was an error starting the server: ", err);
}

app.get("/", (req, res) =>
  res.json({
    message: `You are ${process.env.MY_NAME} and the environment is ${process.env.VERCEL_ENV}`,
  })
);
