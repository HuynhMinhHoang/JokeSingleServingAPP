import express from "express";
import jokeController from "../controller/jokeController";

let route = express.Router();

let initWebRoute = (app) => {
  route.get("/random-joke", jokeController.getJokeController);
  route.post("/vote-joke", jokeController.voteJokeController);

  return app.use("/", route);
};

module.exports = initWebRoute;
