export const serviceWorkerEx = `
  // sw.js
  const cacheName = "ffx-v1";
  const filesToCache = ["index.html"];

  // INSTALL 
  self.addEventListener("install", function(event) {
    // Perform install steps
    console.log("[Servicework] Install");
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        console.log("[ServiceWorker] Caching app shell");
        return cache.addAll(filesToCache);
      })
    );
  });

  // ACTIVATE 
  self.addEventListener("activate", function(event) {
    console.log("[Servicework] Activate");
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== cacheName) {
            console.log("[ServiceWorker] Removing old cache shell", key);
            return caches.delete(key);
          }
        }));
      })
    );
  });

  / ** Functional Events */
  // FETCH 
  self.addEventListener("fetch", (event) => {
    console.log("[ServiceWorker] Fetch");
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );

  });
`;
