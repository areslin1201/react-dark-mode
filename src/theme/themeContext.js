import { createContext } from 'react'

export const themes = {
  dark: 'dark-content', //黑色主題會需要的className
  light: '', //預設
}

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => {},
})