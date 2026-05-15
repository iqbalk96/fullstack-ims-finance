const express = require("express");
const {
  totalAngsuran,
  penalty,
} = require("./contract.controller");

const router = express.Router();

/**
 * GET /api/contracts/total-angsuran?contractNo=AGR00001&cutoffDate=2026-08-14
 */
router.get("/total-angsuran", totalAngsuran);

/**
 * GET /api/contracts/penalty?contractNo=AGR00001&cutoffDate=2026-08-14
 */
router.get("/penalty", penalty);

module.exports = router;