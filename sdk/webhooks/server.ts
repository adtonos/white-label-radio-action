import express from "express";
import bodyParser from "body-parser";
import app from "./app";
import logger from "./logger";

export const initialize = async () => {
  const expressApp = express().use(bodyParser.json());

  expressApp.post("/fulfillment", app);

  const port = process.env.PORT || 3030;
  expressApp.listen(port);

  logger.info("Server started", { port });
};
