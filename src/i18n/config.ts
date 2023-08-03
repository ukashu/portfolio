import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./locales/en.json"
import pl from "./locales/pl.json"

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  resources: {
    en: { translation: en },
    pl: { translation: pl }
  }
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
})
