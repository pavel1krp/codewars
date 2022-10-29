function validatePIN (pin) {
 return (/^([0-9]{4}|[0-9]{6})$/).test(pin)
}
function validatePIN (pin) {
  return (/^(\d{4}|\d{6})$/).test(pin)
 }