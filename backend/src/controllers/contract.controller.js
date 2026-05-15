const contractService = require(
  "../services/contract.service"
);

async function createContract(req, res) {
  try {
    const result =
      await contractService.createContract(
        req.body
      );

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getContracts(req, res) {
  try {
    const result =
      await contractService.getContracts();

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  createContract,
  getContracts,
};