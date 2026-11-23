import express from "express";
import userRouter from "./routes/userRouter.js";
import enemyRouter from "./routes/enemyRouter.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

const globalTraitement = (req, res, next) => {
  console.log("Global traitement");
  next();
};

app.use(globalTraitement);
app.use("/users", userRouter);
app.use("/enemies", enemyRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send("POST METHOD SENT");
});

app.listen(port, () => {
  console.log(`L'app écoute sur le port ${port}`);
});