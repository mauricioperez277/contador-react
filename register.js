if ("serviceWorker" in navigator) {
   console.log("Si, existe,");
    navigator.serviceWorker.register("./sw.js");
};

/* Permite registrar un serviceWork  
//navigator.serviceWorker.register("./serviceWorker.js");
if (navigator.serviceWorker) {
    console.log("Si, existe");
    
    navigator.serviceWorker.register("./sw.js");
} */