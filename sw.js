console.log("registrado-SW");

const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "./components/Contador.js"
];

const CACHE_NAME = "v2_cache_contador_react";
//Instalacion

self.addEventListener("install", (e) =>{
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache=>{
            cache
            .addAll(CACHE_ELEMENTS )
            .then( ()=> {
                self.skipWaiting()
            }).catch(console.log() );
        })
    );
});


//activacion de sw  --activated
self.addEventListener("activate", (e)=>{
    console.log("sw-activate");
    const cacheWhileList = [CACHE_NAME];

    e.waitUntil(
        caches.keys().then( 
            (cacheNames) => {
                return Promise.all(cacheNames.map(cacheNames => {
                    return cacheWhileList.indexOf(cacheNames) === -1 && caches.delete(cacheNames) 
                }));
        }).then( ()=> self.clients.claim() )
    )
});


self.addEventListener("fetch", 
    (e)=>{
        e.respondWith(
            caches.match(e.request).then(res =>{
                if (res) {
                    return res;
                    };
                return fetch(e.request);
            })
        )
    }
);