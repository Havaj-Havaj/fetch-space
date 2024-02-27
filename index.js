window.addEventListener("DOMContentLoaded", () => {
  fetch("http://api.open-notiy.org/astros.json")
  //"http://api.open-notify.org/astros.json"
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const peopleCount = document.querySelector("#count")
      const mainInfo = document.querySelector("table")

      function peopleInCosmos() {
         return peopleCount.textContent = data.number;
      }
      peopleInCosmos()

      function peopleNames() {     
        for(i = 0; i < data.people.length; i++){
          const str = document.createElement("tr")
          mainInfo.append(str)

          const num = document.createElement("td")
          num.textContent = [i+1]
          str.append(num)
          
          const peoplePlace = document.createElement("td")
          peoplePlace.textContent = data.people[i].craft
          num.after(peoplePlace)
         
          const peopleName = document.createElement("td")
          peopleName.textContent = data.people[i].name
          peoplePlace.after(peopleName)
        }
      }

      peopleNames()
      // ТВОЕ РЕШЕНИЕ
    })
    .catch(() => {
      const peopleCount = document.querySelector("#count")
      const mainInfo = document.querySelector("table")

      function error() {
        const errorBlock = document.createElement('div')
        errorBlock.classList.add('error')
        errorBlock.textContent = 'об ошибке'
        peopleCount.textContent = 'неизвестно'
        
        mainInfo.replaceWith(errorBlock)
      }
      
      error()

      // ОБРАБОТКА ОШИБОК
    });
});
