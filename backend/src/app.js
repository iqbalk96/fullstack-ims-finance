const express = require("express");
const cors = require("cors");

// SOAL 1 (existing)
const contractRoutesLegacy = require("./routes/contract.routes");

// SOAL 2 & 3 (raw SQL version)
const contractRoutesSql = require("./modules/contract/contract.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/contracts", contractRoutesLegacy);
app.use("/api/contracts", contractRoutesSql);

module.exports = app;