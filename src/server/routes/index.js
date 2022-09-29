import FilmsRouter from "./films.routes";
import express from "express"
const router = express.Router();

router.use("/films", FilmsRouter);


export default router;