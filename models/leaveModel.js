const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    slot: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Denied"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Leave = mongoose.model("Leave", leaveSchema);
module.exports = Leave;
