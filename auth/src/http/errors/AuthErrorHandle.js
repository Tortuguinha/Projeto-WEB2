class EmployeeNotFound extends Error {
  constructor() {
    super();
    this.status = 404;
    this.message = "Empregado não existe";
    this.name = "EmployeeDoesntExists";
  }
}

class PasswordNotMatch extends Error {
  constructor() {
    super("A senha não está correta");
    this.name = "PasswordNotMatchError";
    this.status = 401;
  }
}

module.exports = { EmployeeNotFound, PasswordNotMatch };
