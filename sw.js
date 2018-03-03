console.log("SW startup");
self.addEventListener('install', function(event) {
  console.log("SW installed");
});

self.addEventListener('activate', function(event) {
  console.log("SW activated");
});
self.addEventListener('fetch', function(event) {
 event.respondWith(
 console.log("Caught a fetch!");
 new Response("Hello from your friendly neighbourhood service worker!");
 )
})
