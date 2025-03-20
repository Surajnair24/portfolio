import { useState } from 'react'
import { Menu } from "./components/menu";
import { Hero } from "./components/hero";
import './App.css'
import { About } from './components/about';
import { Projects } from './components/projects';
import { ContactForm } from './components/contact';
import { Footer } from './components/footer';
import { Experience } from './components/experience';


function App() {

  return (
    <>
    <Menu/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App
