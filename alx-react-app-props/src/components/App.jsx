import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Header from './components/Header'
import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './components/UserContext';
import React, { UserContext} from 'react'
import ProfilePage from './components/ProfilePage';
const userData = {
  name: 'John Doe',
  email: 'john.doe@exemple.com'
};
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="App"> <WelcomeMessage /> </div>
      <div className='Header'><Header /></div>
      <div className='Main'><MainContent /></div>
      <div className='Footer'><Footer /></div>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter name = "app counter"/>
      <UserContext.Provider value={userData}>
        <ProfilePage/>
      </UserContext.Provider>
  </>
  )
}

export default App
