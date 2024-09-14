const Leave = require("../models/leaveModel");

const addLeave = async (req, res) => {
  try {
    const newLeave = new Leave({
      userId: Number(req.body.userId),
      name: req.body.name,
      city: req.body.city,
      reason: req.body.reason,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      slot: req.body.slot || "",
      status: "Pending",
    });

    const leave = await newLeave.save();
    if (!leave) {
      res.status(404).json({ message: "Failed to add new leave" });
    }
    res.status(200).json({ message: "Leave is added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.status(200).json(leaves);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteLeave = async (req, res) => {
  try {
    const leaves = await Leave.findByIdAndDelete(req.params.id);

    if (!leaves) {
      res.status(400).json({ message: "Failed to delete leave" });
    }

    res.status(200).json({ message: "Leave deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateLeave = async (req, res) => {
  try {
    const updateData = await Leave.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    );

    if (!updateData) {
      res.status(400).json({ message: "Failed to update" });
    }

    res.status(200).json({ message: "Updated the data" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  addLeave,
  getLeaves,
  deleteLeave,
  updateLeave,
};
