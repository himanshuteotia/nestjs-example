import { test, expect } from "@playwright/test";

test.describe("Cats API", () => {
  const baseUrl = "http://localhost:3000";

  test.beforeAll(async () => {
    // Assuming your NestJS application is already running on http://localhost:3000
  });

  test("should return all cats", async ({ request }) => {
    const response = await request.get(`${baseUrl}/cats`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toEqual("This action returns all cats");
  });

  test("should create a new cat", async ({ request }) => {
    const newCat = { name: "Whiskers", age: 2 };
    const response = await request.post(`${baseUrl}/cats`, { data: newCat });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toMatchObject(newCat);
  });

  test("should get a cat by id", async ({ request }) => {
    const catId = 1; // Replace with an actual ID from your database or mock
    const response = await request.get(`${baseUrl}/cats/${catId}`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toMatchObject({ id: catId, name: "Whiskers", age: 2 });
  });

  test("should update a cat", async ({ request }) => {
    const catId = 1; // Replace with an actual ID from your database or mock
    const updatedCat = { name: "Whiskers", age: 3 };
    const response = await request.put(`${baseUrl}/cats/${catId}`, {
      data: updatedCat,
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toMatchObject(updatedCat);
  });

  test("should delete a cat", async ({ request }) => {
    const catId = 1; // Replace with an actual ID from your database or mock
    const response = await request.delete(`${baseUrl}/cats/${catId}`);
    expect(response.status()).toBe(204);
  });

  test.afterAll(async () => {
    // Clean up after all tests
  });
});
