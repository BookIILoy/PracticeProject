require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/userRouter");

const cors = require('cors');

const corsOptions = {
  origin : process.env.CORS_ORIGIN,
  Credential: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/users", userRouter);
const port = process.env.PORT;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});