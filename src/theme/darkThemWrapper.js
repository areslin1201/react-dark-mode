import React, { useState, useEffect } from 'react'
import { ThemeContext, themes } from './themeContext'

export default function DarkThemWrapper(props) {
  const [theme, setTheme] = useState(themes.light)  //定義初始主題為light theme

  function changeTheme(theme) {
    setTheme(theme)
  }

  useEffect(() => {
    switch (theme) { //主題切換為 dark mode 時增加 dark className
      case themes.dark:
        document.body.classList.add('dark-content')
        break;
      case themes.light:
      default:
        document.body.classList.remove('dark-content')
        break;
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}