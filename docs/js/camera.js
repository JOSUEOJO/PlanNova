const video =
document.getElementById(
"video"
);

const canvas =
document.getElementById(
"canvas"
);

const preview =
document.getElementById(
"preview"
);

const result =
document.getElementById(
"result"
);

navigator.mediaDevices
.getUserMedia({
video:true
})
.then(stream=>{

video.srcObject =
stream;

});

document
.getElementById("captureBtn")
.addEventListener(
"click",
takePhoto
);

function takePhoto(){

const context =
canvas.getContext("2d");

canvas.width =
video.videoWidth;

canvas.height =
video.videoHeight;

context.drawImage(
video,
0,
0
);

const image =
canvas.toDataURL(
"image/png"
);

preview.src =
image;

preview.style.display =
"block";

analyzeEvidence();
}
function analyzeEvidence(){

result.innerHTML =
"🔍 Analizando evidencia...";

setTimeout(()=>{

const approved =
Math.random() > 0.3;

if(approved){

result.innerHTML =

"✅ Evidencia aprobada";

unlockReward();

}else{

result.innerHTML =

"❌ Evidencia insuficiente";

}

},2000);

}
function unlockReward(){

let stats =
JSON.parse(
localStorage.getItem(
"stats"
));

if(!stats){

stats = {

streak:1,

xp:0,

completed:0

};

}

stats.xp += 100;

localStorage.setItem(

"stats",

JSON.stringify(stats)

);

}
function unlockReward(){

let stats =
JSON.parse(
localStorage.getItem(
"stats"
));

if(!stats){

stats = {

streak:1,

xp:0,

completed:0

};

}

stats.xp += 100;

localStorage.setItem(

"stats",

JSON.stringify(stats)

);

}