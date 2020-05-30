const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

// Middleware
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Route Files
const zonas = require('./routes/zonas');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Initialize app
const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/zonas', zonas);

// Error handler
app.use(errorHandler);

// Initializing server
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV.underline} mode on port ${PORT}`
      .yellow.bold
  )
);

// Handle unhandled promise rejections

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
