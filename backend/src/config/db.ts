// src/config/db.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

const connectToDatabase = async () => {
  try {
    const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/apartment_app';  // MongoDB URI from .env file
    if (!dbURI) {
      throw new Error('MONGODB_URI is not defined in the environment variables');
    }

    await mongoose.connect(dbURI);  // Mongoose 6 handles options automatically

    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);  // Exit process with failure if database connection fails
  }
};

export default connectToDatabase;
