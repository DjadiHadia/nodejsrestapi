// carCRUD.test.js

const request = require('supertest');
const app = require('../index'); // Assuming your main file is named 'index.js'
const Agency = require('../models/agency');
const Car = require('../models/car');

describe('GET /cars', () => {
  test('should return all cars', async () => {
    const response = await request(app).get('/cars');
    
    // Assert that the response status code is 200
    expect(response.status).toBe(200);

    // Assert that the response body contains an array of cars
    expect(response.body).toHaveProperty('cars');
    expect(Array.isArray(response.body.cars)).toBeTruthy();
  });
});
/*
describe('CRUD Operations for Car Resource', () => {
  let testCarId;
  let testAgencyId;

  // Before running tests, create a test agency and a test car
  beforeAll(async () => {
    const testAgency = await Agency.create({ name: 'Test Agency' });
    testAgencyId = testAgency.id;

    const testCar = await Car.create({
      registration_number: '123ABC',
      brand: 'Test Brand',
      color: 'Test Color',
      year: 2020,
      agencyId: testAgencyId
    });
    testCarId = testCar.id;
  });

  // After running tests, clean up test data
  afterAll(async () => {
    await Car.destroy({ where: {}, truncate: true });
    await Agency.destroy({ where: {}, truncate: true });
  });

  // Test for GET all cars endpoint
  describe('GET /cars', () => {
    test('should return all cars', async () => {
      const response = await request(app).get('/cars');
      expect(response.status).toBe(200);
      expect(response.body.cars.length).toBeGreaterThan(0);
    });

    test('should return cars with correct properties', async () => {
      const response = await request(app).get('/cars');
      const car = response.body.cars[0];
      expect(car).toHaveProperty('id');
      expect(car).toHaveProperty('registration_number');
      expect(car).toHaveProperty('brand');
      expect(car).toHaveProperty('color');
      expect(car).toHaveProperty('year');
      expect(car).toHaveProperty('agencyId');
    });

    test('should return 404 if no cars found', async () => {
      await Car.destroy({ where: {}, truncate: true });
      const response = await request(app).get('/cars');
      expect(response.status).toBe(404);
      expect(response.body.message).toBe('No cars found');
    });
  });

  // Test for GET car by ID endpoint
  describe('GET /cars/:carId', () => {
    test('should return a specific car by ID', async () => {
      const response = await request(app).get(`/cars/${testCarId}`);
      expect(response.status).toBe(200);
      expect(response.body.car.id).toBe(testCarId);
    });

    test('should return 404 if car ID does not exist', async () => {
      const response = await request(app).get('/cars/9999');
      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Car not found');
    });

    test('should return 400 if invalid car ID format', async () => {
      const response = await request(app).get('/cars/invalidId');
      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Invalid car ID format');
    });
  });

  // Test for POST car endpoint
  describe('POST /cars', () => {
    test('should create a new car', async () => {
      const newCarData = {
        registration_number: '456DEF',
        brand: 'New Brand',
        color: 'New Color',
        year: 2022,
        agencyId: testAgencyId
      };
      const response = await request(app).post('/cars').send(newCarData);
      expect(response.status).toBe(201);
      expect(response.body.message).toBe('Car created successfully!');
      expect(response.body.car.registration_number).toBe(newCarData.registration_number);
    });

    test('should return 400 if missing required fields', async () => {
      const response = await request(app).post('/cars').send({});
      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Missing required fields');
    });

    test('should return 500 if internal server error', async () => {
      const response = await request(app).post('/cars').send({ invalidData: 'invalid' });
      expect(response.status).toBe(500);
      expect(response.body.error).toBe('Internal server error');
    });
  });

  // Test for PUT car endpoint
  describe('PUT /cars/:carId', () => {
    test('should update an existing car', async () => {
      const updatedCarData = {
        registration_number: '789GHI',
        brand: 'Updated Brand',
        color: 'Updated Color',
        year: 2023,
        agencyId: testAgencyId
      };
      const response = await request(app).put(`/cars/${testCarId}`).send(updatedCarData);
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Car updated!');
      expect(response.body.car.registration_number).toBe(updatedCarData.registration_number);
    });

    test('should return 404 if car ID does not exist', async () => {
      const updatedCarData = {
        registration_number: '789GHI',
        brand: 'Updated Brand',
        color: 'Updated Color',
        year: 2023,
        agencyId: testAgencyId
      };
      const response = await request(app).put('/cars/9999').send(updatedCarData);
      expect(response.status).toBe(404);
      expect(response.body.message).toBe('Car not found!');
    });

    test('should return 400 if invalid car ID format', async () => {
      const response = await request(app).put('/cars/invalidId').send({});
      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Invalid car ID format');
    });
  });

  // Test for DELETE car endpoint
  describe('DELETE /cars/:carId', () => {
    test('should delete an existing car', async () => {
      const response = await request(app).delete(`/cars/${testCarId}`);
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Car deleted!');
    });

    test('should return 404 if car ID does not exist', async () => {
      const response = await request(app).delete('/cars/9999');
      expect(response.status).toBe(404);
      expect(response.body.message).toBe('Car not found!');
    });

    test('should return 400 if invalid car ID format', async () => {
      const response = await request(app).delete('/cars/invalidId');
      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Invalid car ID format');
    });
  });
});
*/