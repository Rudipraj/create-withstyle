import { useState } from 'react'
import reactLogo from './assets/react.svg'
import muiLogo from './assets/mui.svg'
import Typography from '@mui/material/Typography';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://mui.com/" target="_blank">
          <img src={muiLogo} className="logo mui" alt="MUI logo" />
        </a>
      </div>
      <h1>React + MUI</h1>
        
      <Typography sx={{fontWeight:'600'}}>
      Click on the MUI and React logos to learn more
      </Typography>
      
    </div>
  )
}

export default App
