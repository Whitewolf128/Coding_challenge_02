import express, { Router } from "express";
import * as eventController from "../controllers/eventControllers";

const router: Router = express.Router();

router.get("/events", eventController.getAllEventsController);
router.post("/events", eventController.createEventsController);
router.delete("/events/:id", eventController.deleteEventController);
router.put("/events/:id", eventController.updateEventController);

export default router;