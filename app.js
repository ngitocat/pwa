navigator.serviceWorker.register('/sw.js').then(registration => console.log("sw registered successful"))
Notification.requestPermission().then(permission => navigator.serviceWorker.ready.then(reg => reg.showNotification("From brower")))
var urlBase64ToUnit8Array = base64String => {
  var padding = "=".repeat((4 - base64String.length % 4) % 4);
	var base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
	var rawData = window.atob(base64);
	var outputArray = new Uint8Array(rawData.length);
	for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
navigator.serviceWorker.ready.then(regis => regis.pushManager.subscribe({
  userVisibleOnly: true//,
  //applicationServerKey: urlBase64ToUnit8Array("BDOWqqLHOrQz1N_z3PmAdpf1kAJIPtv4d0wb0_q0T_RG7EIP6ZcGiU8bPWy8f3QU6QaSkVU8CKpOi8E5YbNbDQ8")
})).then(subscription => console.log("subscrip : ", JSON.stringify(subscription)))

