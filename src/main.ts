import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { messages, defaultLocale } from "@/i18n";
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import './assets/main.css'

function getCurrentLocale()
{
    var locale= navigator.language;
    if (locale.indexOf("-")>0)
    {
        locale= locale.substring(0,locale.indexOf("-"));
    }
    return locale;
}

const i18n=createI18n({
    messages:messages,
    locale: getCurrentLocale(),
    fallbackLocale:  defaultLocale
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
