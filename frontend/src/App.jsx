import React from 'react'
import Navbar from './components/navbar'
import Intro from './components/intro'
import About from './components/about'
import Techs from './components/techs'
import Educationn from './components/education'
import Project from './components/projects'
import Footer from './components/footer'

const App=()=>{

  return(
    <div className=" text-neutral-300 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#61e_150%)]"></div></div>
      <div className="container mx-auto px-7">
        <Navbar/>
        <Intro/>
        <About/>
        <Techs/>
        <Educationn/>
        <Project/>
        <Footer/>
      </div>
    </div>
    
  )


}

export default App