const mensajes = [

    "Hola, soy Nova 👋",

    "Te ayudaré con tus tareas.",

    "Sincroniza Google Calendar.",

    "Consigue rachas diarias 🔥",

    "¡Comencemos!"
];

let indice = 0;

const texto = document.getElementById("nova-message");

setInterval(() => {

    indice++;

    if(indice >= mensajes.length){
        indice = 0;
    }

    texto.innerText = mensajes[indice];

},3000);

document
.getElementById("startBtn")
.addEventListener("click",()=>{

    window.location.href="dashboard.html";

});