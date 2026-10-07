/**
 * Represents an event in the system
 */
export interface Event {
    id: string; // Unique identifier for the event
    name: string; // Name of the event
    date: string; // Date of the event
    capacity: number; // Capacity of the event (optional)
    registrationCount: number; // Number of registrations for the event (optional)
    createdAt: Date; // Timestamp when the event was created
    updatedAt: Date; // Timestamp when the event was last updated
}