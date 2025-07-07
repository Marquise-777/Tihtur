import { ref, watch, onMounted } from 'vue'

const THEME_KEY = 'tihtur-theme'
const THEME_LIGHT = 'light'
const THEME_DARK = 'dark'

// Create reactive theme state
const isDark = ref(false)

export function useTheme() {
  const setTheme = (theme) => {
    isDark.value = theme === THEME_DARK
    
    // Update document class
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    
    // Store preference
    localStorage.setItem(THEME_KEY, theme)
  }

  const toggleTheme = () => {
    const newTheme = isDark.value ? THEME_LIGHT : THEME_DARK
    setTheme(newTheme)
  }

  const initTheme = () => {
    // Check localStorage first
    const stored = localStorage.getItem(THEME_KEY)
    if (stored) {
      setTheme(stored)
      return
    }

    // Fall back to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? THEME_DARK : THEME_LIGHT)
  }

  return {
    isDark,
    setTheme,
    toggleTheme,
    initTheme
  }
}