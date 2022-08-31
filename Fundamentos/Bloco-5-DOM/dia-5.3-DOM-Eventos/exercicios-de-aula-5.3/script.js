function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth() {
    let daysList = document.querySelector('#days')
    for (let i = 0; i < decemberDaysList.length; i =+ 1) {
        let day = decemberDaysList[i];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;

        if (day ===24 || day === 31) {
            dayItem.className = 'day holiday';
            daysList.appendChild(dayItem);
        } else if (day === 4 || day === 11 || day === 18) {
            dayItem.className = 'day friday'
            daysList.appendChild(dayItem);
        } else if ( day === 25 ) {
            dayItem.className = 'day holiday friday'
            daysList.appendChild(dayItem);
        } else {
            dayItem.className = 'day';
            daysList.appendChild(dayItem); 
        }
    }
}  

function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button')
    let newButtonID = 'btn-holiday'

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);

}

createHolidayButton('Feriados');

function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday'); // selecione o botão "Feriados";
    let getHolidays = document.querySelectorAll('.holiday')// Seleciona todos os feriados como um array de elementos;
    let backgroundColor = 'rgb(238,238,238)'; // armazena a cor da configuração inicial;
    let setNewColor = 'white'; // armazena a nova cor que será utilizada ao pressionar o botão.

    getHolidayButton.addEventListener('click', function() {
        for (let index = 0; index < getHolidays.length; index += 1) {
            if (getHolidays[index].style.backgroundColor === setNewColor) {
                getHolidays[index].style.backgroundColor = backgroundColor
            } else {
                getHolidays[index].style.backgroundColor = setNewColor;
            }
          }
        });
      

};

displayHolidays();

function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container'); // Armazena o container de botões;
    let newButton = document.createElement('button'); //Cria um botão;
    let newButtonID = 'btn-friday'; //armazena o id do botão

    newButton.innerHTML = buttonName; //adiciona o nome do botão
    newButton.id = newButtonID; //adiciona o id do botão
    buttonContainer.appendChild(newButton); //adiciona o botão como filho do container de botões



  }
  createFridayButton('Sexta-feira');

function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';

    getFridayButton.addEventListener('click', function() {
        // cria o escutador de eventos
        for (let index = 0; index < fridays.length; index += 1) {
            if (fridays[index].innerHTML !== newFridayText) {
                fridays[index].innerHTML = newFridayText;
              } else {
                fridays[index].innerHTML = fridaysArray[index];
                }
            
            }
      });
  
}

let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);
  
