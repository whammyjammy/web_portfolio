import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/list/List'
import Portfolio from './components/portfolio/Portfolio'
import Testemonials from './components/testemonials/Testemonials'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Skill from './components/skills/Skills'


const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Experience />
      <Portfolio />
      <Testemonials />
      <Contacts />
      <Footer />


    </div>
  )
}

export default App