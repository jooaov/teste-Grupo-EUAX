require('./bootstrap');
import router from "./router";
import App from "./components/App";

const app = new Vue({
    el: '#app',
    router,               // <-- register router with Vue
    render: (h) => h(App) // <-- render App component
});
