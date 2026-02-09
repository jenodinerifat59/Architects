import React from 'react'
import Nav from '../ui/Nav'
import Container from '../component/Container'
import Hero from '../ui/Hero'
import Features  from '../ui/Features'
import Love from '../ui/Love'

const App = () => {
  return (
    <div>
      <Container>
        <Nav/>
        <Hero/>
        <Features/>
        <Love/>
      </Container>
    </div>
  )
}

export default App
