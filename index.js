window.addEventListener('DOMContentLoaded', () => {
  fetch("http://api.open-notify.org/astros.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {

      // ТВОЕ РЕШЕНИЕ

    })
    .catch(() => {
      
      // ОБРАБОТКА ОШИБОК

    })
});
