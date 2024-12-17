const CACHE_NAME = 'philadelphia-pwa-v1';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/Philadelphia-University-Jordan-logo.jpg'
];

// Install event
self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching files');
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});

// Activate event
self.addEventListener('activate', (event) => {
    console.log('Service Worker activated.');
});

// Fetch event
self.addEventListener('fetch', (event) => {
    console.log('Fetch event:', event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
