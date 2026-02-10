import React from 'react'
import Nav from '../ui/Nav'
import Container from '../component/Container'
import Hero from '../ui/Hero'
import Features  from '../ui/Features'
import Love from '../ui/Love'
import Facts from '../ui/Facts'
import Sponspors from '../ui/Sponspors'

const App = () => {
  return (
    <div>
      <Container>
        <Nav/>
        <Hero/>
        <Features/>
        <Love/>
        <Facts/>
      <Sponspors/>
      </Container>
    </div>
  )
}

export default App
