import express from "express";
import cors from "cors";
import router from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import issueRoutes from "./routes/issueRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";



const app = express();

app.use(cors());
app.use(express.json());

// Middleware
app.use("/api/auth", authRoutes);
app.use("/api", router);
app.use("/api/issues", issueRoutes);
app.use("/api/admin", adminRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
