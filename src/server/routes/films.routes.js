import express from "express";
import Films from "../controllers/films.controller";

const router = express.Router();

router.get("/:movieId?", async (req, res, next) => {
  let { movieId } = req.params;
  console.log("like this?", movieId)
  let data;

  if (movieId) {
    data = await Films.findOne(movieId);
  } else {
    data = await Films.findAll();
  }
  res.json(data);
});

router.post("/", async (req, res, next) => {
  let FilmsDTO = req.body;
  let data = await Films.addOne(FilmsDTO);
  res.json(data);
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let FilmsDTO = req.body;
  let data = await Films.updateOne(id, FilmsDTO);
  res.json(data);
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await Films.removeOne(id);
  res.json(data);
});

  export default router;

