import express from "express";

const router = express.Router();

router.get("/films", (req, res, next) => {
  res.send("films will go here");
});

router.get("/films/filmid", (req, res, next) => {
  res.send("specific films here");
})
export default router;

