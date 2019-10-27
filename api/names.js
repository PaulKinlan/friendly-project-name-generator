const { generate } = require("../lib/generate.js");
const microCors = require("micro-cors");
const cors = microCors({ allowMethods: ['GET'] })

module.exports = cors((req, res) => {
  let { count = 1, separator = "-" } = req.query;

  if (count > 100) count = 100;

  res.json(generate(count, separator));
});