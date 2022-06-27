import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './styles/compStyles.css'

function Header() {
  return (
    <Container fluid id='headerCont' className="d-flex justify-content-center align-items-center">
      <Row>
        <Col className='d-flex justify-content-center align-items-center flex-column mb-5'>
          <h1>Maingi Blog</h1>
          <p>Centered Location for all the Knowledge in the World</p>
        </Col>
      </Row>
      <div class="custom-shape-divider-bottom-1656365442">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
      </div>
    </Container>
  )
}

export default Header;