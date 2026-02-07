import React from 'react'
import Nav from '../ui/Nav'
import Container from '../component/Container'
import Hero from '../ui/Hero'
import Features  from '../ui/Features'

const App = () => {
  return (
    <div>
      <Container>
        <Nav/>
        <Hero/>
        <Features/>
      </Container>
    </div>
  )
}

export default App
