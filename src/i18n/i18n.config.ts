import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import pl from "@/i18n/translations/pl.json";
import en from "@/i18n/translations/en.json";

const resources = {
  pl: {
    translation: pl,
  },
  en: {
    translation: en,
  },
};

i18next.use(initReactI18next).init({
  debug: true,
  lng: "en",
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18next;
