window.addEventListener("load", async() => {
    const subscribeButton = document.querySelector("#subscribeButton");

    const sW = await navigator.serviceWorker.register("./sw.js");
    console.log("service worker:",sW);

    subscribeButton.addEventListener("click", async() => {
        const serviceWorker = await navigator.serviceWorker.ready;
        const clientID = await serviceWorker.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'BCGdOFaEauAG341kGsu7yNDpkNKL4KDutXQ1KafNQJUq-T5hl_tfWROR9_jUgmtTX5Ig4mnweK4QXK5UU77Fyu0',
        })
        console.log(clientID);
        console.log(JSON.stringify(clientID));
    });
});

