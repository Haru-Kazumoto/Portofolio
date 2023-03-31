import './App.css'
import Header from './component/header/header'
import Hero from './page/Hero section/hero'
import About from './page/About section/About'
import Service from './page/Service section/Service'
import Skills from './page/Skills section/Skills'
import Project from './page/Project section/Project'
import Footer from './page/Footer section/Footer'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <Hero />
        <About /> 
        <Service />
        <Skills />
        <Project />
        <Footer />
      </section>
    </>
  )
}

export default App
