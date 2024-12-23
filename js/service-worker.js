self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/css/main.css',
                '/js/script.js',
                '/js/translations.js'
            ]);
        })
    );
}); 