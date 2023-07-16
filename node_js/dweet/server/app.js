import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "express-async-errors";
import tweetRouter from "./router/tweets.js";
import authRouter from "./router/auth.js";
import { config } from "./config.js";
import { initSocket } from "./connection/socket.js";
import { connectDB } from "./db/database.js";
// import { sequelize } from "./db/database.js";

const app = express();

const corsOption = {
  origin : config.cors.allowedOrigin,
  optionSuccessStatus: 200,
}

app.use(express.json());
app.use(helmet());
app.use(cors(corsOption));
app.use(morgan("tiny"));

app.use("/tweets", tweetRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  console.log("Not found");
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err);
  return res.sendStatus(500);
});

connectDB()
  .then(() => {
    console.log(`Server is started... ${new Date()}`);
    const server = app.listen(config.port);
    initSocket(server);
  })
  .catch(console.error);

// sequelize.sync().then((client) => {
//   console.log(client);
//
//   const server = app.listen(config.host.port);
//   initSocket(server);
// });
