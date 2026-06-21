const CACHE = 'shoplist-v3';
const ASSETS = ['/', '/index.html', '/manifest.json', '/icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

// Network-first for navigations and the app shell, so a phone always gets the
// latest deployed code when it has a connection. Falls back to cache only
// when actually offline. A pure cache-first strategy here previously caused
// phones to get stuck running a stale version indefinitely after an update.
self.addEventListener('fetch', e => {
  const isAppShell = e.request.mode === 'navigate' ||
    ASSETS.some(a => e.request.url.endsWith(a)) ||
    e.request.url.endsWith('index.html');

  if (isAppShell) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request).then(r => r || caches.match('/index.html')))
    );
    return;
  }

  // Other assets (fonts, icons): cache-first is fine, they rarely change.
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
