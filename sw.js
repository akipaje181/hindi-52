// ヒンディー語52週：オフラインでも開けるようにする
const VERSION = "acbbccc663";
const CACHE = "hindi52-" + VERSION;
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "data/phase1.js", "data/phase2.js", "data/phase3.js", "data/phase4.js", "img/aki-base.webp", "img/aki-card.webp", "img/aki-cards.webp", "img/aki-chart.webp", "img/aki-check.webp", "img/aki-cheer.webp", "img/aki-goal.webp", "img/aki-graduate.webp", "img/aki-handshake.webp", "img/aki-listen.webp", "img/aki-medal.webp", "img/aki-morning.webp", "img/aki-night.webp", "img/aki-online.webp", "img/aki-point.webp", "img/aki-rest.webp", "img/aki-study.webp", "img/aki-talk.webp", "img/aki-think.webp", "img/aki-travel.webp", "img/aki-wave.webp", "img/aki-write.webp", "img/ch-chat.webp", "img/ch-mail.webp", "img/ch-meet.webp", "img/ch-phone.webp", "img/ch-video.webp", "img/empty-notes.webp", "img/fx-done.webp", "img/hero-sky.webp", "img/ic-grammar.webp", "img/ic-input.webp", "img/ic-review.webp", "img/ic-roleplay.webp", "img/ic-sentences.webp", "img/ic-shadow.webp", "img/ic-speak.webp", "img/ic-streak.webp", "img/ic-test.webp", "img/ic-vocab.webp", "img/ic-writing.webp", "img/map-route.webp", "img/partner-priya.webp", "img/partner-raj.webp", "img/partner-sharma.webp", "img/scene-1.webp", "img/scene-2.webp", "img/scene-3.webp", "img/scene-4.webp", "img/stamp-1.webp", "img/stamp-2.webp", "img/stamp-3.webp", "img/stamp-4.webp", "img/sync-devices.webp", "img/tab-guide.webp", "img/tab-map.webp", "img/tab-notes.webp", "img/tab-record.webp", "img/tab-today.webp"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // 自分のファイル：ネット優先（新しい版をすぐ反映）、つながらなければ保存分
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; }).catch(() => caches.match(req, {ignoreSearch: true})));
  } else if (/fonts\.(googleapis|gstatic)\.com/.test(url.host)) {
    e.respondWith(caches.match(req).then(m => m || fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; })));
  }
});
