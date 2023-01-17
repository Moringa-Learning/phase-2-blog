import Header from './Header'
import Blog from './Blog'
import TopBlog from './TopBlog'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
  return (
    <>
    <Header />
    <Container className='p-3'>
      <Row className='mt-5'>
        <Col sm={12} md={12} lg={8}><Blog /></Col>
        <Col sm={12} md={12} lg={4}><TopBlog /></Col>
      </Row>
    </Container>
    </>

  );
}

export default Home;
