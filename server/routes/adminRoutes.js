import express from "express";

import {
  getAllIssuesAdmin,
  updateIssueStatus,
  getAllUsers,
  deleteIssueAdmin,
} from "../controllers/adminController.js";

import protect from "../middlewares/authMiddlewares.js";
import authorizeRoles from "../middlewares/roleMiddleware.js";

const router = express.Router();

// Admin-only routes
router.get(
  "/issues",
  protect,
  authorizeRoles("admin"),
  getAllIssuesAdmin
);

router.put(
  "/issues/:id/status",
  protect,
  authorizeRoles("admin"),
  updateIssueStatus
);

router.delete(
  "/issues/:id",
  protect,
  authorizeRoles("admin"),
  deleteIssueAdmin
);


router.get(
  "/users",
  protect,
  authorizeRoles("admin"),
  getAllUsers
);

export default router;
