// キャッシュの名前を定義
const CACHE_NAME = 'buzzwave-cache-v1';

// キャッシュするリソースを定義
const urlsToCache = [
  '/',
  '/index.html',
  '/images/BuzzWave.png',
  '/images/mainvisual.jpg',
  '/images/mainvisualright.png',
  '/images/trackrecord1.png',
  '/images/trackrecord2.png',
  '/images/trackrecord3.png',
  '/images/Trackrecord10.png',
  '/images/Trackrecord50.png',
  '/images/Trackrecord100.png',
  '/images/Trackrecord200.png',
  '/images/FutureAI.png',
  '/images/OverseasComparison.png',
  '/images/Thecause.png',
  '/images/zeroichi.png',
  '/images/curriculum01_1.png',
  '/images/curriculum01_2.png',
  '/images/curriculum01_3.png',
  '/images/curriculum01_4.png',
];

// ServiceWorkerのインストール時の処理
self.addEventListener('install', (event: Event) => {
  const e = event as ExtendableEvent;
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// リソースフェッチ時の処理
self.addEventListener('fetch', (event: Event) => {
  const e = event as FetchEvent;
  e.respondWith(
    caches.match(e.request)
      .then((response) => {
        // キャッシュが見つかればそれを返す
        if (response) {
          return response;
        }

        // キャッシュが見つからなければリクエストを複製
        const fetchRequest = e.request.clone();

        return fetch(fetchRequest).then(
          (response) => {
            // レスポンスが無効な場合は何も保存せずそのまま返す
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // レスポンスを複製（レスポンスは一度しか使用できないため）
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(e.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// 古いキャッシュの削除
self.addEventListener('activate', (event: Event) => {
  const e = event as ExtendableEvent;
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// TypeScriptの型定義
interface ExtendableEvent extends Event {
  waitUntil(fn: Promise<any>): void;
}

interface FetchEvent extends Event {
  request: Request;
  respondWith(response: Promise<Response> | Response): Promise<Response>;
}

// ServiceWorkerのスコープ外でTypeScriptエラーを防ぐため
export {};