export function nameValidator(name, label) {
  if (!name) return { error: true, message: `${label} can't be empty.` };
  return { error: false, message: '' };
}
