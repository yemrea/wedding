import { Locales } from "./locales";

import en from "./en.json";
import tr from "./tr.json";
import nl from "./nl.json";

export const messages = {
  [Locales.EN]: en,
  [Locales.TR]: tr,
  [Locales.NL]: nl
};

export const defaultLocale = Locales.EN;

export const supportedLocales= Locales;