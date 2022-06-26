import React from 'react';
import Container from 'react-bootstrap/Container'
import { Navbar, Nav } from 'react-bootstrap'

function NavigationBar(){
  return (
    <Navbar bg="light" expand="lg" className='ms-auto'>
      <Container>

        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href='#'>Photos</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  )
}

export default NavigationBar