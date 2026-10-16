const CACHE_NAME = 'nagli-v10';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './driver.html',
  './admin.html',
  './firebase.js',
  './manifest.json'
];

// التثبيت - يحفظ الملفات
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching files');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// التفعيل - يمسح الكاش القديم
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Deleting old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// الجلب - يجرب الشبكة أولاً ثم الكاش
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request, { cache: 'no-store' })
      .then(response => {
        // حدث الكاش بالنسخة الجديدة
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        // إذا لا يوجد انترنت، اعرض من الكاش
        return caches.match(event.request);
      })
  );
});


هذا سيجبر المتصفح على تحديث كل شيء تلقائياً.
