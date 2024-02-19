/* eslint-disable no-unused-vars */
import { Navbar } from './Components/Navbar/Navbar';
import { Header } from './Components/Header/Header';
import { Section } from './Components/Section/Section';
import { Planes } from './Components/Planes/Planes';
import { Contacto } from './Components/Contacto/Contacto';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className='background-Section'>
        <Section />
      </div>
      <Planes />
      <Contacto />
    </>
  )
}

export default App
