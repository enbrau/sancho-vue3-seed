import settings from '@/settings'

const SESSION_STORAGE_KEYS = {
  THEME_MODE: 'sancho-theme-mode',
  LOCALE: 'sancho-locale'
}

// session > other
export function getInitialLocale() {
  let val = window.sessionStorage.getItem(SESSION_STORAGE_KEYS.LOCALE)
  if (!val) {
    val = navigator.language || navigator.userLanguage || 'zh-cn'
    window.sessionStorage.setItem(SESSION_STORAGE_KEYS.LOCALE, val)
  }
  return val.toLowerCase()
}
