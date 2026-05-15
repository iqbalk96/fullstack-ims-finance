const {
  getTotalAngsuran,
  getPenalty,
} = require("./contract.service");

// NO 2
async function totalAngsuran(req, res) {
  try {
    const { contractNo, cutoffDate } = req.query;

    const data = await getTotalAngsuran(contractNo, cutoffDate);

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

// NO 3
async function penalty(req, res) {
  try {
    const { contractNo, cutoffDate } = req.query;

    const data = await getPenalty(contractNo, cutoffDate);

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

module.exports = {
  totalAngsuran,
  penalty,
};