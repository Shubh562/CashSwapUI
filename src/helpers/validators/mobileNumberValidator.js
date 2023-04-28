export function mobileNumberValidator(mobileNumber) {
  const re = /^(\+\d{1,3}[- ]?)?\d{10}$/
  if (!mobileNumber) return { error: true, message: "Mobile Number can't be empty." };
  if (!re.test(mobileNumber)) return { error: true, message: 'Enter a valid Mobile Number.' };
  return { error: false, message: '' };
}
