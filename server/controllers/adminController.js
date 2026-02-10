import Issue from "../models/Issue.js";
import User from "../models/user.js";

// @route GET /api/admin/issues
// @desc  Get all issues (admin view)
// @access Admin
export const getAllIssuesAdmin = async (req, res) => {
  try {
    const issues = await Issue.find()
      .populate("createdBy", "name email role")
      .sort({ createdAt: -1 });

    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route PUT /api/admin/issues/:id/status
// @desc  Update issue status (authority action)
// @access Admin
export const updateIssueStatus = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);

    if (!issue)
      return res.status(404).json({ message: "Issue not found" });

    issue.status = req.body.status || issue.status;
    await issue.save();

    res.json(issue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route GET /api/admin/users
// @desc  Get all users
// @access Admin
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Admin delete issue
// @route   DELETE /api/admin/issues/:id
// @access  Admin
export const deleteIssueAdmin = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    await issue.deleteOne();
    res.json({ message: "Issue deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
