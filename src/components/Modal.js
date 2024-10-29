
/// ----------- сарое
// export function setupModal() {
//   const modal = document.getElementById('modal');
//   const openButton = document.getElementById('openModal');
//   const closeButton = document.getElementById('closeModal');

//   openButton.addEventListener('click', () => {
//     modal.classList.remove('hidden');
//     document.body.style.overflow = 'hidden';
//   });

//   closeButton.addEventListener('click', () => {
//     modal.classList.add('hidden');
//     document.body.style.overflow = 'auto';
//   });
// }


export function setupModal() {
  const modal = document.getElementById('modal');
  const openModalButton = document.getElementById('openModalButton');
  const closeModalButton = document.getElementById('closeModalButton');

  // Функция для открытия модального окна
  function openModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // отключаем прокрутку страницы
  }

  // Функция для закрытия модального окна
  function closeModal() {
    modal.classList.add('fade-out'); // добавляем класс анимации исчезновения
    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('fade-out'); // убираем класс после окончания анимации
      document.body.style.overflow = 'auto'; // включаем прокрутку страницы
    }, 300); // длительность анимации fadeOut
  }

  // Обработчики событий
  openModalButton.addEventListener('click', openModal);
  closeModalButton.addEventListener('click', closeModal);

  // Закрытие модального окна при клике вне его
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}