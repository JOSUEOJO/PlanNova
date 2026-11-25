// reloj

function updateClock(){

    const now = new Date();

    const hora =
        now.toLocaleTimeString();

    document
        .getElementById("clock")
        .innerText = hora;
}

setInterval(updateClock,1000);

updateClock();


// racha simulada

let streak = localStorage.getItem("streak");

if(!streak){

    streak = 1;

    localStorage.setItem(
        "streak",
        streak
    );
}

document
.getElementById("streakDays")
.innerText =
streak + " días";


// tareas

let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

document
.getElementById("taskCount")
.innerText =
tasks.length;


// Nova

const frases = [

"Hoy es un gran día para estudiar 📚",

"Recuerda terminar tus tareas.",

"Tu racha está creciendo 🔥",

"Organiza tu semana desde el calendario.",

"Cada tarea completada te acerca a tus metas."
];

function cambiarMensaje(){

    const random =
    Math.floor(
        Math.random() *
        frases.length
    );

    document
    .getElementById("novaText")
    .innerText =
    frases[random];
}

setInterval(
    cambiarMensaje,
    5000
);
window.onload = ()=>{

showNotification(

"PLANOVA",

"Bienvenido nuevamente"

);

};