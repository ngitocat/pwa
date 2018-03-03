console.log("SW startup");
self.addEventListener('fetch', event => event.respondWith(new Response('Hello from your friendly neighbourhood service worker!')))
