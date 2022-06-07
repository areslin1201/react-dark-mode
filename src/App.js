import React  from 'react'
import 'antd/dist/antd.min.css'
import './App.css'
import { ThemeContext } from './theme/themeContext'
import ToggleDarkMode from './components/toggleDarkMode'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  return (
    <div className="App">
      <h1>Dark and Light mode</h1>

      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDarkMode
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            changeTheme={changeTheme}
          />
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default App;