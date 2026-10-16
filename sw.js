const CACHE = "naqli-v5"; // غيرت الرقم لـ v5 ليجبر التحديث
const ASSETS = [
  "./",
  "./index.html",
  "./driver.html",
  "./admin.html",
  "./firebase.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((c) => {
      return Promise.allSettled(
        ASSETS.map(url => c.add(url).catch(err => console.log("فشل cache", url)))
      );
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((n) => {
        if (n !== CACHE) {
          return caches.delete(n);
        }
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (!e.request.url.startsWith("http")) return;

  // لملفات HTML اجلب من الشبكة أولاً (مهم لـ driver.html)
  if (e.request.mode === 'navigate' || e.request.url.includes('.html')) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // لباقي الملفات (صور، أيقونات) من الكاش أولاً
  e.respondWith(
    caches.match(e.request).then((cached) => {
      return cached || fetch(e.request).then((res) => {
        return res;
      });
    })
  );
});


سيعمل الجديد الآن.
