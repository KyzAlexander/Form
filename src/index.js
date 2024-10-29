import './styles/main.scss';

import { setupModal } from './components/Modal';
import { setupForm } from './components/Form';


document.addEventListener('DOMContentLoaded', () => {
  setupModal();
  setupForm();
});
