const { _env } = require("../lib/env");
const axios = require("axios");

/**
 * Permite fazer requisições para o serviço
 * /employee.
 */

const api = axios.create({
  baseURL: _env.EMPLOYEE_API_URL, // Rota (internal/protegido) do /employee
});

const employeeAPI = {
  findEmail: async (email) => {
    try {
      const res = await api.get("/credentials", {
        params: { email },
        headers: {
          "Content-Type": "application/json",
          "x-internal-token": _env.INTERNAL_SECRET_KEY, // Para rotas protegidas (apenas entre serviços), evitando acesso de terceiros.
        },
      });

      return res.data; // Retorna os dados a seguir
    } catch (err) {
      console.error("Erro ao buscar e-mail no serviço employee:", err.message);
      throw err;
    }
  },
};

module.exports = employeeAPI;
