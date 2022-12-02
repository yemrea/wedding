import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { messages, defaultLocale, supportedLocales } from "@/i18n";
import { createI18n, type Locale } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import type { Locales } from './i18n/locales';

function getCurrentLocale()
{
    var locale : string= navigator.language;
    if (locale.indexOf("-")>0)
    {
        locale= locale.substring(0,locale.indexOf("-"));
    }
    if (!Object.values(supportedLocales).includes(locale as Locales))
    {
        locale=defaultLocale;
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
