import Issue from "../models/Issue.js";

// @route POST /api/issues
// @desc  Create new issue
// @access Private
export const createIssue = async (req, res) => {
  try {
    const { title, description, category, location, image } = req.body;

    const issue = await Issue.create({
      title,
      description,
      category,
      location:location || undefined,
      image,
      createdBy: req.user._id
    });

    res.status(201).json(issue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route GET /api/issues
// @desc  Get all issues
// @access Public
// @route GET /api/issues
// @desc  Get issues (user: own issues, admin: all)
// @access Private
export const getIssues = async (req, res) => {
  try {
    let issues;

    if (req.user.role === "admin") {
      // Admin sees all issues
      issues = await Issue.find()
        .populate("createdBy", "name email")
        .sort({ createdAt: -1 });
    } else {
      // User sees ONLY their issues
      issues = await Issue.find({ createdBy: req.user._id })
        .populate("createdBy", "name email")
        .sort({ createdAt: -1 });
    }

    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// @route GET /api/issues/:id
// @desc  Get single issue
// @access Public
export const getIssueById = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id)
      .populate("createdBy", "name email");

    if (!issue)
      return res.status(404).json({ message: "Issue not found" });

    res.json(issue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route PUT /api/issues/:id
// @desc  Update issue status
// @access Private
export const updateIssue = async (req, res) => {
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

// @route DELETE /api/issues/:id
// @desc  Delete issue
// @access Private
export const deleteIssue = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue)
      return res.status(404).json({ message: "Issue not found" });

    // only creator or admin can delete
    if (issue.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await issue.deleteOne();
    res.json({ message: "Issue removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
