import { Event } from "../models/eventModel";
export function getAllEvents(): Event[] | PromiseLike<Event[]> {
    throw new Error("Function not implemented.");
}

export function createEvent(eventData: { name: any; description: any;}): Event[] | PromiseLike<Event[]> {
    throw new Error("Function not implemented.");
}

export function updateEvent(id: string, updateData: { name: any; description: any;}): Event[] | PromiseLike<Event>{
    throw new Error("Function not implemented.");
}

export function deleteEvent(id: string){
    throw new Error("Function not implemented.");
}