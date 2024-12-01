import express from "express";
import developerController from "../controller/developer.controller";

const developerRouter = express.Router();

/**
 * @swagger
 * /v1/developer/:
 *   get:
 *     summary: Get all developers
 *     description: Retrieve a list of all developers.
 *     tags: [Developers]
 *     responses:
 *       200:
 *         description: List of developers
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DevelopersResponse'
 *       500:
 *         description: Internal server error
 */
developerRouter.get("/v1/developer/", developerController.getDevelopers);

export default developerRouter;
