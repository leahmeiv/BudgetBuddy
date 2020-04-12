//tests to make sure all fields for register page is valid

const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegistorInput(data) {
  let errors = {};


//Looks at imported data; makes sure it has all these fields
//If the field is empty, we set it to an empty string
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.conPass = !isEmpty(data.conPass) ? data.conPass : "";


  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "Name field is required";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Name field is required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required and must be a valid email";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.conPass)) {
    errors.conPass = "Please confirm password";
  }
  if (!Validator.isLength(data.password,{min: 6, max: 30})) {
    errors.password = "Password must be at least 6 characters";
  }
  if(!Validator.equals(data.password, data.conPass)) {
    errors.conPass = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};