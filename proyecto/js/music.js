const sounds = {

notification:
new Audio(
"assets/sounds/notification.mp3"
),

success:
new Audio(
"assets/sounds/success.mp3"
),

warning:
new Audio(
"assets/sounds/warning.mp3"
),

achievement:
new Audio(
"assets/sounds/achievement.mp3"
)

};

function playSound(type){

const settings =
JSON.parse(
localStorage.getItem(
"settings"
));

if(
settings &&
settings.sound === false
){

return;

}

if(sounds[type]){

sounds[type].currentTime = 0;

sounds[type].play();

}

}