self.addEventListener("push", (e) =>{
    const config = {
        body:"Mesaj icerigi",
        data : {
            dateOfArrival: Date.now(),
            primaryKey: "3"
        }
    }
    e.waitUntil(self.registration.showNotification("Yeni makale", config));
});