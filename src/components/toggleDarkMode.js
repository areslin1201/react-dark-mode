import React from 'react'
import { Switch } from 'antd'
import { themes } from '../theme/themeContext'

const ToggleDarkMode = ({ darkMode, setDarkMode, changeTheme }) => {
  const onChange = () => {
    setDarkMode(!darkMode);
    changeTheme(darkMode ? themes.light : themes.dark);
  }

  return (
    <Switch checkedChildren="dark" unCheckedChildren="light" onChange={onChange} />
  )
}

export default ToggleDarkMode