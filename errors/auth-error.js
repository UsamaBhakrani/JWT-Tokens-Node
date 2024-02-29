const CustomAPIError = require("./custom-error");

class AuthError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = AuthError;
