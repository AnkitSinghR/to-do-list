
let cacheData='appV1'
this.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/js/bundle.js','/localhost','/favicon.ico','/index.html','/'
            ])
        })
    )
})

this.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request).then((result)=>{
            if(result){
                return result
            }
        })
    )
})