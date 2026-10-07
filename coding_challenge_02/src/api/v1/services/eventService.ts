import { Event } from "../models/eventModel";

// In-memory storage for demo purposes
const items: Event[] = [];

/**
 * Retrieves all items from storage
 * @returns Array of all items
 */
export const getAllEvents = async (): Promise<Event[]> => {
  // Return a deep clone to avoid direct mutation
  return structuredClone(items);
};

/**
 * Creates a new item
 * @param eventData - The data for the new item (name and description)
 * @returns The created item with generated ID
 */
export const createEvent = async (eventData: {
  name: string;
  description: string;
}): Promise<Event> => {
  // Create a new item with auto-generated ID
  const newItem: Event = {
    id: Date.now().toString(),
    name: eventData.name,
    date: new Date().toISOString(),
    capacity: 0, // Default capacity
    registrationCount: 0, // Default registration count
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  items.push(newItem);
  return structuredClone(newItem);
};

/**
 * Updates an existing item
 * @param id - The ID of the item to update
 * @param itemData - The fields to update (name and/or description)
 * @returns The updated item
 * @throws Error if item with given ID is not found
 */
export const updateEvent = async (
  id: string,
  eventData: Pick<Event, "name">
): Promise<Event> => {
  const index: number = items.findIndex((item: Event) => item.id === id);

  if (index === -1) {
    throw new Error(`Event with ID ${id} not found`);
  }

  // Update the item with the provided fields
  items[index] = {
    ...items[index],
    ...eventData,
    updatedAt: new Date(),
  };

  return structuredClone(items[index]);
};

/**
 * Deletes an event from storage
 * @param id - The ID of the event to delete
 * @throws Error if event with given ID is not found
 */
export const deleteEvent = async (id: string): Promise<void> => {
  const index: number = items.findIndex((item: Event) => item.id === id);

  if (index === -1) {
    throw new Error(`Event with ID ${id} not found`);
  }

  items.splice(index, 1);
};