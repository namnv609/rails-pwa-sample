if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceworker.js', { scope: './' })
    .then(function(reg) {
      console.log('[Companion]', 'Service worker registered!');
    });
}

// window.addEventListener("load", function(event) {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response) {
//       response.json().then(function(json) {
//         console.log(json);
//       });
//     }).catch(function() {
//       console.log("@@");
//     });
// })
