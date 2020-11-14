const express = require("express");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const chalk = require("chalk");
const colors = require("colors");
const port = process.env.PORT || 4000;
dotenv.config();
app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/upload", uploadRoutes);

//static folder
const folder = path.resolve();
app.use("/uploads", express.static(path.join(folder, "/uploads")));

var __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("server running");
  });
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
