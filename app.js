const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/database"); // Import your database configuration
require("dotenv").config();
const leaveRoutes = require("./routes/leaveRoutes");
const PORT = process.env.PORT || 4000;

// Connect to the database
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Express server is running on ${PORT}`);
  });
}).catch(() => {
    console.log("Problem connecting with database")
});

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

app.use("/api", leaveRoutes);
