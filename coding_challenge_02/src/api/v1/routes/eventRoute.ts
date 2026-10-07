import express, { Router } from "express";
import * as eventController from "../controllers/eventControllers";

const router: Router = express.Router();

router.get("/", eventController.getAllEvents);
router.get("/", eventController.createEvent);
router.get("/:id", eventController.deleteEvent);
router.get("/:id", eventController.updateEvent);

export default router;