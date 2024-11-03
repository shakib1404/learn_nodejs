const error = new Error("Something went wrong");
const { CustomError } = require('./customerror');
throw new CustomError("This is a custom error");
