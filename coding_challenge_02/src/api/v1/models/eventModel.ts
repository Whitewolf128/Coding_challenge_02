/**
 * Represents an event in the system
 */
export interface Event {
    id: string; // Unique identifier for the event
    name: string; // Name of the event
    description: string; // Description of the event
    price?: number; // Price of the event (optional)
    createdAt: Date; // Timestamp when the event was created
    updatedAt: Date; // Timestamp when the event was last updated
}