const express = require("express");
const healthRouter = express.Router();

// Canary Release Analysis Endpoint (Dummy Service)
healthRouter.get("/canary-check", (req, res) => {
  const num1 = parseInt(req.query.num1) || 0;
  const num2 = parseInt(req.query.num2) || 0;
  const sum = num1 + num2;

  if (!isNaN(sum)) {
    res.status(200).json({
      status: "healthy",
      canary: true,
      sum: sum,
    });
  } else {
    res.status(500).json({ status: "unhealthy" });
  }
});

module.exports = healthRouter;
