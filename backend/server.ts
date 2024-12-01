import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import apartmentRoutes from './src/api/router/apartment.router'
import connectToDatabase from './src/config/db';
import { errorHandler } from './src/api/middleware/errorHandler';
import developerRouter from './src/api/router/developer.router';
import { swaggerUi,swaggerSpec } from './swagger';
import "reflect-metadata";

const cors = require('cors');
dotenv.config(); 

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000; 

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/apartments-service', apartmentRoutes,developerRouter);
app.use(errorHandler)
app.listen(PORT, () => {
    connectToDatabase();
  console.log(`Server is running on http://localhost:${PORT}`);
});
