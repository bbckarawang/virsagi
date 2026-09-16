const CACHE_NAME = 'appscript-pwa-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Meneruskan permintaan langsung ke jaringan
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
