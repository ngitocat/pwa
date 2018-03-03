self.addEventListener('fetch', event => event.respondWith(new Response("Hello World from your friendly neighbourhood service worker!")))
