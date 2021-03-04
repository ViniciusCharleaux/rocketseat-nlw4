import request from 'supertest';

describe("Users", () => {
    request(app).post("/users")
    .send({
        email: "user@example.com",
        name: "User Example"
    })
})