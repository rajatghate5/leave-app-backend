const express = require("express");
const router = express.Router();
const {
  addLeave,
  getLeaves,
  deleteLeave,
  updateLeave
} = require("../controller/leaveController");

router.post("/addLeave", addLeave);
router.get("/getLeaves", getLeaves);
router.delete("/removeLeave/:id", deleteLeave);
router.put("/updateLeave/:id", updateLeave);

module.exports = router;
