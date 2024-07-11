import React from 'react'
import Demo from './page/demo/Demo'
import './App.css';
import Hero from './page/hero/Hero';
import FormComponent from './components/Fun';
import Aps from './components/Aps';

const App = () => {
  return (
    <>

    <div className="container">
      <Demo/>
      <Hero/>
      <FormComponent/>
      <Aps/>
    </div>
    
    
     
    </>
  )
}

export default App