import express, { Express, Request, Response } from "express";
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

app.get("/", function (req: Request, res: Response) {
  res.send("<h2>Hey ..</h2>");
});

app.listen(PORT, function () {
  console.log(`App running on port: ${PORT}`.blue.bold);
});
