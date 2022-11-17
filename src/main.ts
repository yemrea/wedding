import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { messages, defaultLocale } from "@/i18n";
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const i18n=createI18n({
    messages:messages,
    locale: navigator.language,
    fallbackLocale: defaultLocale
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
