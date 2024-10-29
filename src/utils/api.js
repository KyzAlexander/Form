export async function sendFormData(data) {
  const response = await fetch('http://localhost:9090/api/registration', {
    method: 'POST',
    body: data,
  });
  return await response.json();
}
