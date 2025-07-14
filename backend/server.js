// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import protectedRoute from './routes/protectedRoute.js';

dotenv.config();

const app = express(); // ✅ Declare app FIRST

// Middleware
app.use(cookieParser());
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Health check
app.get('/', (req, res) => {
  res.send('🌞 Sunnys Health Care API is running!');
});

// Routes
app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api', protectedRoute);

// Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});