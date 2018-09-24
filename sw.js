console.log("hello from sw")
self.addEventListener('push', event => event.waitUntil(self.registration.showNotification("Push message received : ", {body: event.data.text()})))
