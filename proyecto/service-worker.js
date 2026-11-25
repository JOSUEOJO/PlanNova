const CACHE_NAME = "planova-v1";

const urlsToCache = [

"/",

"/index.html",

"/dashboard.html",

"/tareas.html",

"/calendario.html",

"/estadisticas.html",

"/configuracion.html",

"/css/style.css",

"/css/dashboard.css",

"/css/tareas.css",

"/js/login.js",

"/js/dashboard.js",

"/js/tareas.js"

];

self.addEventListener(
"install",
event => {

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache => {

return cache.addAll(
urlsToCache
);

})

);

}
);

self.addEventListener(
"fetch",
event => {

event.respondWith(

caches.match(
event.request
)

.then(response => {

return response ||
fetch(event.request);

})

);

}
);
