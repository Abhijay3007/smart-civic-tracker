import express from "express";
import protect from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Test route working!" });
});

router.get("/protected", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

export default router;
