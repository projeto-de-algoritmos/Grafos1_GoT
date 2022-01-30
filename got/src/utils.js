const importData = () => {
  const data = require("./data/data.json");

  return data;
};

const gotNames = () => {
  const data = importData();

  const nameSet = new Set(data.map((item) => item["Source"]));

  return [...nameSet];
};

module.exports = { importData, gotNames };
