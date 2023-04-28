export function pinValidator(pin, confirmPin = null) {
  if (!pin) return { error: true, message: "Pin can't be empty." };
  if (pin.length != 4) return { error: true, message: 'Pin must be 4 digit long.' }
  if (confirmPin && pin != confirmPin) return { error: true, message: "Pin doesn't match." };
  return { error: false, message: '' };
}
