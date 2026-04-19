const CACHE_NAME = "tracker-v1";
const assets = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png", // додайте назву вашої іконки
];

// Встановлення Service Worker та кешування ресурсів
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    }),
  );
});

// Робота в офлайні: перехоплення запитів
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
