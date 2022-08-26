/**
 * Created by Doma on 2016/11/22.
 */
// import VueAPlayer from './vue-aplayer.vue'
// import Vue from 'vue'
// Vue.config.devtools = true
// VueAPlayer.disableVersionBadge = true
// new Vue({
//     el: '#app',
//     render: h => h(App)
// })
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');
