import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Chat } from 'vue-quick-chat'


// // export default {
// //     components: {
// //       Chat
// //     },
// //   }

createApp(App).use(store).use(router).mount('#app')
