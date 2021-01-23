importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js')

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
    // new workbox.strategies.NetworkFirst()
)
if (window.location?.search === "?home=true"){
    document.body.innerHtml = '<h1>Offline!</h1>
    }

