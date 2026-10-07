import {Request, Response, NextFunction} from "express";
import {HTTP_STATUS} from "../../../constants/httpConstants";
import * as eventService from "../services/eventService";
import type { Event } from "../models/eventModel";

export const getAllEvents = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const events: Event[] = await eventService.getAllEvents();
    res.status(HTTP_STATUS.OK).json({
      message: "Events retrieved successfully",
      data: events,
    });
  } catch (error) {
    next(error);
  }
};

export const createEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    try 
    {
        // Basic validation - check for required fields
        if (!req.body.name) {
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: "Event name is required",
            });
        }  
        else if (!req.body.description)    
        {
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: "Event description is required",
            });
        } 
        else {
            // Extract only the fields we need
            const { name, description } = req.body;

            const eventData = { name, description };

            const newEvent = await eventService.createEvent(eventData);
            res.status(HTTP_STATUS.CREATED).json({
                message: "Item created successfully",
                data: newEvent,
            });
        }
    } 
    catch (error) 
    {
        next(error);
    }
};

export const updateEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] ?? "" : req.params.id;

    // Extract update fields
    const { name, description } = req.body;

    // Create update data object with only the fields that can be updated
    const updateData = { name, description };

    const updateEvent = await eventService.updateEvent(id, updateData);
    res.status(HTTP_STATUS.OK).json({
      message: "Item updated successfully",
      data: updateEvent,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] ?? "" : req.params.id;

    await eventService.deleteEvent(id);
    res.status(HTTP_STATUS.OK).json({
      message: "Event deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};