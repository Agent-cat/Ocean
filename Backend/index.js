const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const userRouter = require("./routes/user.routes");
const investmentRoutes = require('./routes/investment.routes');
const registrationRoutes = require('./routes/registration.routes');
const bookingRoutes = require('./routes/booking.routes');

const { ConnectDB } = require("./Database/connection");
const port = process.env.PORT || 5000;

// Middleware

app.use(cors());
app.use(express.json());

// Connect to MongoDB
ConnectDB();
app.use("/api/users", userRouter);
app.use('/api/investments', investmentRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/bookings', bookingRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
