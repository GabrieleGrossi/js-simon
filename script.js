/*const clock = setInterval(lesson, 1000);

function lesson() {
    alert('New lesson');
    clearInterval(clock);
}
alert('test')
*/

function updateCountdown() {
    const now = new Date();
    const alarm = new Date();

    alarm.setHours(9);
    alarm.setMinutes(30);
    alarm.setSeconds(0);

    if (now > alarm) {
        // Se l'ora corrente è già passata rispetto all'orario dell'allarme,
        // impostiamo l'allarme per il giorno successivo
        alarm.setDate(alarm.getDate() + 1);
      }
      const timeUntilAlarm = alarm - now;
      const secondsRemaining = Math.floor(timeUntilAlarm / 1000);
  
      const hoursElement= document.getElementById("hours");
      const minutesElement= document.getElementById("minutes");
      const secondsElement= document.getElementById("seconds");

      //Credo sia corretto, ma non ne sono sicuro
      if (secondsRemaining > 0) {
        const hours = Math.floor(secondsRemaining / 3600);
        const minutes = Math.floor((secondsRemaining % 3600) / 60);
        const seconds = secondsRemaining % 60;
  
        setTimeout(updateCountdown, 1000);
        hoursElement.textContent = hours ;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
      } else {
        countdownElement.textContent = "Sono le 9:30. Inizia una nuova lezione!";
      }
    }
  
    updateCountdown();