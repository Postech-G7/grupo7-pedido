import express, { Application } from "express";

const ExpressConfig = (): Application => {
  const app = express();
  app.use(express.json());
  return app;
};

export default ExpressConfig;
