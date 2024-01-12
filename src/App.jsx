/* eslint-disable no-unused-vars */
import { Navbar } from './Components/Navbar/Navbar';
import { Header } from './Components/Header/Header';
import { Section } from './Components/Section/Section';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className='background-Section'> 
      <Section />
      </div>
    </>
  )
}

export default App
