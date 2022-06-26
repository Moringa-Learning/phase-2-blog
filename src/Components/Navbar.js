import React from 'react';
import Container from 'react-bootstrap/Container'
import { Navbar, Nav } from 'react-bootstrap'

function NavigationBar(){
  return (
    <Navbar bg="light" expand="lg" className='ms-auto'>
      <Container>

        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href='/photo'>Photos</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  )
}

export default NavigationBar