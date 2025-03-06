import React from 'react'
import '@mantine/core/styles.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import { MantineProvider } from '@mantine/core'

import Navbar from './CommonUi/Navbar'

 import "./App.css"
import Services from './Components/Services';
import Total from './Components/Total';
const App = () => {
  return (
    <Router>
    <MantineProvider>
      <Navbar/>
     <Services/>
     <Total/>
    </MantineProvider>
    </Router>
  )
}

export default App
