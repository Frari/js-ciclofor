// chiedo l'email all'utente
var mail_utente = prompt('Scrivi qui la tua tua e-mail');

// scrivo l'array contenete le email valide
var email = ['mariorossi@gmail.com','luigibianchi@gmail.com','pincopallo@gmail.com', 'giacomolorenzi@gmail.com','francericcardi@gmail.com'];
// ciclo for per validazione email inserita dall'utente
var trovato = false;

for (var i = 0; i < email.length; i++){
  if(mail_utente == email[i]){
    console.log(email[i]);
    trovato=true;
  }
}
// messaggio di convalida o non convalida all'utente
if (trovato==true){
  alert('e-mail inserita correttamente');
}
else {
  alert('e-mail inserita non corretta');
}
