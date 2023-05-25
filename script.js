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
  
      const countdownElement = document.getElementById("countdown");
  
      
    }
  
    updateCountdown();