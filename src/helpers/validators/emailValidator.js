export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return { error: true, message: "Email can't be empty." };
  if (!re.test(email)) return { error: true, message: 'Please enter a valid email address.' };
  return { error: false, message: '' };
}