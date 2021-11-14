import express from "express";

import { appConfig } from "./config/app-config.js";

const app = express();

const port = appConfig.port || 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
