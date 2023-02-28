import { ref } from 'vue'

export const useDarkMode = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const toggleDarkMode = ref(document.documentElement.className.includes('dark'))

  const changeDarkMode = () => {
    toggleDarkMode.value = document.documentElement.classList.toggle('dark')
    toggleDarkMode.value ? (localStorage.theme = 'dark') : (localStorage.theme = 'light')
  }

  return {
    changeDarkMode,
    toggleDarkMode
  }
}
