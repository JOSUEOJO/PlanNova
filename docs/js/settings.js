const soundToggle =
document.getElementById(
"soundToggle"
);

const notificationToggle =
document.getElementById(
"notificationToggle"
);

const themeBtn =
document.getElementById(
"themeBtn"
);


// cargar ajustes guardados

const settings =
JSON.parse(
localStorage.getItem(
"settings"
)) || {

sound:true,

notifications:true,

darkMode:false

};

soundToggle.checked =
settings.sound;

notificationToggle.checked =
settings.notifications;

if(settings.darkMode){

document.body.classList.add(
"dark"
);

}


// guardar sonidos

soundToggle.addEventListener(
"change",
()=>{

settings.sound =
soundToggle.checked;

saveSettings();

});


// guardar notificaciones

notificationToggle.addEventListener(
"change",
()=>{

settings.notifications =
notificationToggle.checked;

saveSettings();

});


// tema oscuro

themeBtn.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark"
);

settings.darkMode =
document.body.classList.contains(
"dark"
);

saveSettings();

});


function saveSettings(){

localStorage.setItem(

"settings",

JSON.stringify(settings)

);

}