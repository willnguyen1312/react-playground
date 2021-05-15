import React, { useState } from 'react'
import {useCookie} from 'react-use'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let _value: any = 0
  if (count ===0) {
    let [value, updateCookie, deleteCookie] = useCookie("my-cookie");
    _value = +(value || 0)
  }

  console.log(_value);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
