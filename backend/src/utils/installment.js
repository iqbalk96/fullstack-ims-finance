function generateInstallments({
  contractId,
  tenorMonths,
  amount,
}) {
  const installments = [];

  for (let i = 1; i <= tenorMonths; i++) {
    const dueDate = new Date();

    dueDate.setMonth(dueDate.getMonth() + i);

    installments.push({
      contractId,
      installmentNo: i,
      amount,
      dueDate,
    });
  }

  return installments;
}

module.exports = {
  generateInstallments,
};