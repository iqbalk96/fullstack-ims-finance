const prisma = require("../config/prisma");
const {
  generateInstallments,
} = require("../utils/installment");

async function createContract(payload) {
  const {
    contractNo,
    clientName,
    otr,
    dpPercentage,
    tenorMonths,
  } = payload;

  const dpAmount =
    otr * (dpPercentage / 100);

  const loanAmount =
    otr - dpAmount;

  const monthlyInstallment =
    Math.ceil(loanAmount / tenorMonths);

  const contract =
    await prisma.contract.create({
      data: {
        contractNo,
        clientName,
        otr,
        dpPercentage,
        dpAmount,
        loanAmount,
        tenorMonths,
      },
    });

  const installments =
    generateInstallments({
      contractId: contract.id,
      tenorMonths,
      amount: monthlyInstallment,
    });

  await prisma.installment.createMany({
    data: installments,
  });

  return contract;
}

async function getContracts() {
  return prisma.contract.findMany({
    include: {
      installments: true,
    },
  });
}

module.exports = {
  createContract,
  getContracts,
};