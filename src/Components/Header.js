import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './styles/compStyles.css'

function Header() {
  return (
    <Container id='headerCont'>
      <Row className='pt-2'>
        <Col className='d-flex justify-content-center align-items-center flex-column'>
          <h1>Maingi Blog</h1>
          <p>Centered Location for all the Knowledge</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Header;