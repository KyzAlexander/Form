import IMask from 'imask';
import { validateForm } from '../utils/validate';
import { sendFormData } from '../utils/api';

export function setupForm() {
  const form = document.getElementById('feedbackForm');
  const phoneInput = form.querySelector('input[name="phone"]');
  IMask(phoneInput, {
    mask: '+{375}(00)000-00-00',
    lazy: false, // отображение маски сразу, без необходимости фокуса    
    placeholderChar: '_' // символ для пустых позиций маски
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const validationResult = validateForm(data);

    if (validationResult.isValid) {
      const response = await sendFormData(data);
      if (response.status === 'success') {
        form.reset();
        alert(response.msg);
      } else {
        showErrors(response.fields);
      }
    } else {
      showErrors(validationResult.fields);
    }
  });
}

function showErrors(errors) {
  Object.keys(errors).forEach((field) => {
    const input = document.querySelector(`[name=${field}]`);
    input.classList.add('error');
    const errorElement = document.createElement('div');
    errorElement.textContent = errors[field];
    input.parentNode.appendChild(errorElement);
  });
}