const novaMessages = [

"¿Ya revisaste tus tareas?",

"Recuerda estudiar un poco cada día 📚",

"Tu racha puede crecer hoy 🔥",

"Una tarea terminada vale más que diez pendientes.",

"Organiza tu semana desde el calendario.",

"Hoy puedes superar tu récord."
];

function novaTalk(){

const text =
document.getElementById(
"novaText"
);

const random =
Math.floor(

Math.random() *
novaMessages.length

);

text.innerText =
novaMessages[random];

speak(
novaMessages[random]
);

}

setInterval(
novaTalk,
7000
);
function speak(text){

const speech =
new SpeechSynthesisUtterance();

speech.text = text;

speech.lang = "es-ES";

speech.rate = 1;

window.speechSynthesis
.speak(speech);

}
function changeNovaMood(type){

const nova =
document.getElementById(
"novaAssistant"
);

switch(type){

case "happy":

nova.src =
"assets/nova/nova-happy.png";

break;

case "thinking":

nova.src =
"assets/nova/nova-thinking.png";

break;

case "sad":

nova.src =
"assets/nova/nova-sad.png";

break;

}

}