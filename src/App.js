import './App.css';
import Navigationbar from './Components/Navbar';
import Header from './Components/Header'
import Container from 'react-bootstrap/Container'
import Blog from './Components/Blog'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <Container className='p-3'>
      <Header />
      <Navigationbar />
      <Row>
        <Col  sm={6} md={12} lg={8}><Blog /></Col>
      </Row>
    </Container>
  );
}

export default App;
