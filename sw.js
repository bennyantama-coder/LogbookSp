const cacheName = 'logbook-v12';
const assets = ['./', './index.html', './manifest.json', 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js'];
self.addEventListener('install', e => e.waitUntil(caches.open(cacheName).then(c => c.addAll(assets))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
