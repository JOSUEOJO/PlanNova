const CACHE_NAME = "planova-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./blocker.html",
  "./calendario.html",
  "./camera.html",
  "./configuracion.html",
  "./dashboard.html",
  "./estadisticas.html",
  "./tareas.html",
  "./manifest.json",
  "./logo.png",
  "./monster.png",
  "./css/blocker.css",
  "./css/calendario.css",
  "./css/camera.css",
  "./css/configuracion.css",
  "./css/dashboard.css",
  "./css/estadisticas.css",
  "./css/style.css",
  "./css/tareas.css",
  "./js/assistant.js",
  "./js/calendario.js",
  "./js/camera.js",
  "./js/dashboard.js",
  "./js/login.js",
  "./js/music.js",
  "./js/notifications.js",
  "./js/settings.js",
  "./js/streak.js",
  "./js/tareas.js",
  "./js/theme-loader.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
