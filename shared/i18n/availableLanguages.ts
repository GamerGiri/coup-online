export enum AvailableLanguageCode {
  
  "bn-BD" = "bn-BD",
}

export type AvailableLanguage = {
  code: AvailableLanguageCode
  flag: string
  name: string
}

export const availableLanguages: AvailableLanguage[] = [
  {
    code: AvailableLanguageCode["de-DE"],
    flag: "🇩🇪",
    name: "Deutsch",
  },
  {
    code: AvailableLanguageCode["en-US"],
    flag: "🇺🇸",
    name: "English",
  },
  {
    code: AvailableLanguageCode["es-MX"],
    flag: "🇲🇽",
    name: "Español",
  },
  {
    code: AvailableLanguageCode["fr-FR"],
    flag: "🇫🇷",
    name: "Français",
  },
  {
    code: AvailableLanguageCode["it-IT"],
    flag: "🇮🇹",
    name: "Italiano",
  },
  {
    code: AvailableLanguageCode["pt-BR"],
    flag: "🇧🇷",
    name: "Português",
  },
  {
    code: AvailableLanguageCode["hi-IN"],
    flag: "🇮🇳",
    name: "हिन्दी",
  },
  {
    code: AvailableLanguageCode["bn-BD"],
    flag: "🇧🇩",
    name: "বাংলা",
  },
]
