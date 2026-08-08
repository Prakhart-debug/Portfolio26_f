import { atom } from 'nanostores'
import { useStore } from '@nanostores/react'

// Cross-island theme store (nanostores) — replaces the old React Context
// provider, which can't cross Astro island boundaries. Each island that
// calls useTheme() reads/writes the same shared atom independently.
const getInitial = () => {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.getAttribute('data-theme') || 'dark'
}

export const themeStore = atom(getInitial())

export function setTheme(next) {
  themeStore.set(next)
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }
}

export function toggleTheme() {
  setTheme(themeStore.get() === 'dark' ? 'light' : 'dark')
}

export function useTheme() {
  const theme = useStore(themeStore)
  return { theme, toggleTheme }
}
