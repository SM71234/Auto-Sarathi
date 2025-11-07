
import 'dotenv/config';
import express from "express";
import cors from "cors"; // 🟩 Added CORS
import { connectDB } from "./config/db.js";
import authRoutes from "./Routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// 🟩 Connect MongoDB
connectDB();

// 🟩 Enable CORS for your frontend
app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// 🟩 Log all requests (optional but helpful)
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.originalUrl);
  next();
});

// 🟩 Middleware to parse JSON
app.use(express.json());

// 🟩 Routes
app.use("/api", authRoutes);

// 🟩 Test route (for debugging)
app.post("/register", (req, res) => {
  console.log("hello");
  res.status(200).json({ message: "Test route working!" });
});

// 🟩 Default route
app.get("/", (req, res) => res.send("Server running fine!"));

// 🟩 Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
