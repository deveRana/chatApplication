import React from 'react'
import './App.css'
import AccountProvider from './context/AccountProvider';
import MainPage from './components/MainPage';
import SecondUserContext from './context/SecondUserContext';


const App = () => {

  return (  
 
    <SecondUserContext>


    <AccountProvider>

      <MainPage/>
          
    </AccountProvider>

    </SecondUserContext>
 
  )
}

export default App
