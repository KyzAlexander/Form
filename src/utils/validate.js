export function validateForm(data) {
  const errors = {};
  for (let [key, value] of data.entries()) {
    if (!value) {
      errors[key] = 'This field is required';
    }
  }
  return { isValid: Object.keys(errors).length === 0, fields: errors };
}

