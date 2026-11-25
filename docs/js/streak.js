let stats =
JSON.parse(
localStorage.getItem("stats")
);

if(!stats){

stats = {

streak:1,

xp:0,

completed:0

};

saveStats();
}

function saveStats(){

localStorage.setItem(
"stats",
JSON.stringify(stats)
);

}

document.getElementById("streak").innerText =
stats.streak + " días";

document.getElementById("xp").innerText =
stats.xp + " XP";

document.getElementById("completed").innerText =
stats.completed;

const tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

const total =
tasks.length;

let progress = 0;

if(total > 0){

progress =
Math.floor(
(stats.completed/total)*100
);

}

document.getElementById("progress").innerText =
progress + "%";

const badges =
document.getElementById("badges");

if(stats.streak >= 3){

badges.innerHTML +=
"<li>🥉 Estudiante Constante</li>";

}

if(stats.streak >= 7){

badges.innerHTML +=
"<li>🥈 Estudiante Dedicado</li>";

}

if(stats.streak >= 30){

badges.innerHTML +=
"<li>🥇 Maestro de la Productividad</li>";

}

if(stats.xp >= 500){

badges.innerHTML +=
"<li>⭐ Experto PLANOVA</li>";

}

if(stats.xp >= 1000){

badges.innerHTML +=
"<li>👑 Leyenda PLANOVA</li>";

}