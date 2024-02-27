/**
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 *
 *
 * НЕ ПОДГЛЯДЫВАЙ В ЭТОТ ФАЙЛ ПОКА НЕ ВЫПОЛНИШЬ ВСЕ РЕЛИЗЫ
 *
 */

 window.addEventListener('DOMContentLoaded', () => {
  fetch("http://api.open-notify.org/astros.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const table = document.querySelector('table');

      const count = document.querySelector('#count');

      count.textContent = data.number;

      for(let i = 0; i < data.people.length; i++) {
        const tableRow = document.createElement('tr');
        const tableColumnForNumber = document.createElement('td');
        const tableColumnForPlace = document.createElement('td');
        const tableColumnForName = document.createElement('td');

        tableRow.append(
          tableColumnForNumber,
          tableColumnForPlace,
          tableColumnForName,
        );

        tableColumnForNumber.textContent = i + 1;
        tableColumnForPlace.textContent = data.people[i].craft;
        tableColumnForName.textContent = data.people[i].name;

        table.append(tableRow)
      }
    })
    .catch((error) => {
      const count = document.querySelector('#count');
      const table = document.querySelector('table');

      const errorMessageContainer = document.createElement('div');

      count.textContent = 'неизвестно';

      errorMessageContainer.classList.add('error');

      errorMessageContainer.textContent = 'Произошла ошибка при получении данных'

      table.replaceWith(errorMessageContainer);
    })
})
