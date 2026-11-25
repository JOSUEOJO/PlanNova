if(Notification.permission !== "granted"){

Notification.requestPermission();

}

function showNotification(
title,
message
){

const settings =
JSON.parse(
localStorage.getItem(
"settings"
));

if(
settings &&
settings.notifications === false
){

return;

}

if(
Notification.permission ===
"granted"
){

new Notification(
title,
{
body:message
}
);

}

}