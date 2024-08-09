import react from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programms from './Components/Programms/Programms'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Csr from './Components/Csr/Csr'
import Contact from './Components/Contact/Contact'



const App = () => {
  return (
    <div>
      
      <Navbar/>
     
      <Hero/>
      <div className="container">
        <Title title="What we do" subtitle="Our programm"/>
        
      <Programms/>
      <About/>
      <Title title="EDUCATION" subtitle="Projects"/>
      <Projects/>
      <Csr/>
      <Title title="Contact us" subtitle="GET IN TOUCH"/>
      <Contact/>
        

      </div>
      
      
    </div>
  )
}

export default App
