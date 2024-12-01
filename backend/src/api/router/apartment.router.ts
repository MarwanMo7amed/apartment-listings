import express from "express";
import apartmentController from "../controller/apartment.controller";

const router = express.Router();

/**
 * @swagger
 * /apartments:
 *   get:
 *     summary: Get all apartments with pagination
 *     description: Retrieve a list of apartments with pagination support.
 *     tags: [Apartments]
 *     parameters:
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *         description: Number of apartments to retrieve.
 *       - in: query
 *         name: offset
 *         required: false
 *         schema:
 *           type: integer
 *         description: Number of apartments to skip.
 *     responses:
 *       200:
 *         description: List of apartments with pagination.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApartmentListingResponse'
 *       500:
 *         description: Internal server error.
 */
router.get("/v1/apartment/", apartmentController.getAllApartments);

/**
 * @swagger
 * /apartments/{id}:
 *   get:
 *     summary: Get apartment details by ID
 *     description: Retrieve details of a specific apartment using its ID.
 *     tags: [Apartments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the apartment.
 *     responses:
 *       200:
 *         description: Apartment details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApartmentDetailsResponse'
 *       404:
 *         description: Apartment not found.
 *       500:
 *         description: Internal server error.
 */
router.get("/v1/apartment/:id", apartmentController.getApartmentDetails);

/**
 * @swagger
 * /apartments:
 *   post:
 *     summary: Create a new apartment
 *     description: Add a new apartment to the database.
 *     tags: [Apartments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateApartmentRequest'  # Reference the class
 *     responses:
 *       201:
 *         description: Apartment created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 *       400:
 *         description: Invalid request body.
 *       500:
 *         description: Internal server error.
 */
router.post("/v1/apartment/", apartmentController.createApartment);

export default router;
