const { db } = require("../../db/connection");

// NO 2
async function getTotalAngsuran(contractNo, cutoffDate) {
  const [rows] = await db.query(
    `
    SELECT 
        c.contractNo,
        c.clientName,
        SUM(i.amount) AS totalAngsuranJatuhTempo
    FROM contract c
    JOIN installment i ON i.contractId = c.id
    WHERE c.contractNo = ?
      AND i.dueDate <= ?
    GROUP BY c.contractNo, c.clientName
    `,
    [contractNo, cutoffDate]
  );

  return rows[0];
}

// NO 3
async function getPenalty(contractNo, cutoffDate) {
  const [rows] = await db.query(
    `
    SELECT 
        c.contractNo,
        c.clientName,
        i.installmentNo,

        DATEDIFF(?, i.dueDate) AS hariKeterlambatan,

        (i.amount * 0.001 * DATEDIFF(?, i.dueDate)) AS totalDenda

    FROM contract c
    JOIN installment i ON i.contractId = c.id
    WHERE c.contractNo = ?
      AND i.isPaid = 0
      AND i.dueDate <= ?
    ORDER BY i.installmentNo ASC
    `,
    [cutoffDate, cutoffDate, contractNo, cutoffDate]
  );

  return rows;
}

module.exports = {
  getTotalAngsuran,
  getPenalty,
};