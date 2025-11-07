const { AuthUseCase } = require("../AuthUseCase");

// Permite a injeção de dependência dentro o UseCase
function MakeAuth(employeePrismaFactory) {
  const userRepos = employeePrismaFactory.createRepository();
  const auth = new AuthUseCase(userRepos);

  return auth;
}

module.exports = { MakeAuth };
