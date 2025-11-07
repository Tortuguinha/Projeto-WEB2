const bcrypt = require("bcrypt");

// Faz a comparação das senhas
const comparePwd = async (pwdData, pwdHash) => {
  return await bcrypt.compare(pwdData, pwdHash);
};

module.exports = { comparePwd };
