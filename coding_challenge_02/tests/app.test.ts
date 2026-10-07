import request, { Response } from "supertest";

import app from "../src/app";

describe("GET /", () => {
    it("should return Hello World", async () => {
        // create a GET request to the root endpoint
        const response: Response = await request(app).get("/");

        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello World");
    });
});

describe("GET /api/v1/health", () => {
    it("should return server health status", async () => {
        // create GET request to health endpoint
        const response: Response = await request(app).get("/api/v1/health");

        // assert response status OK and health object to have specified properties
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
        expect(response.body).toHaveProperty("uptime");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body).toHaveProperty("version");
    });
});

describe("POST /api/v1/events", () => {
    it("should create an event from a JSON request body", async () => {
        const response: Response = await request(app)
            .post("/api/v1/events")
            .send({ name: "Community meetup", description: "A local gathering" });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe("Event created");
        expect(response.body.data).toMatchObject({
            name: "Community meetup",
            capacity: 0,
            registrationCount: 0,
        });
    });
});