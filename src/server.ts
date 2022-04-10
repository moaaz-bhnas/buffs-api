import express, { Express } from "express";
import "colorts/lib/string";
import dotenv from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";

dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(PORT, function () {
  console.log(`App running on port: ${PORT}`.blue.bold);
});

export default app;
