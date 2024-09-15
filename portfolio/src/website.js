import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pic1 from './route trace.png';
import Pic2 from './365 wonders.png';
import Pic3 from './immediaid.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Portfolio() {

  const sendMsg = () => {
    alert('Message sent!');
  };

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section className='projects' id='projects'>
      <Container>
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Pic1}/>
            <Card.Body>
              <Card.Title>Route Trace</Card.Title>
              <Card.Text>
              A mobile application that combines transport options and gives you 
              the best route with live arrival times. Get step-by-step directions 
              with live guidance as you travel!
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Pic2} />
            <Card.Body>
              <Card.Title>365 Wonders Booking Reservations Service</Card.Title>
              <Card.Text>
              A travel agency website with services such as airline ticketing, 
              corporate travel, hotel reservations, and visa services. Book now!
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Pic3} />
            <Card.Body>
              <Card.Title>IMMEDIAID</Card.Title>
              <Card.Text>
              A mobile application designed to provide information about 
              disaster preparedness and response for residents of Lipa City, 
              Batangas, specifically Barangay Dagatan.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='contact' id='contact'>
      <h2 class="text-center">Send a message!</h2>

      <Form onSubmit={sendMsg}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" placeholder='Enter message' required />
      </Form.Group>

      <Button variant="dark" type="submit">
        Send
      </Button>
      </Form>
    </section>

    <section className='about' id='about'>
    <Card bg='dark' data-bs-theme='dark'>
      <Card.Body className='text-center'>
        <Card.Title>About</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">Learn more about the creator!</Card.Subtitle>
        <Card.Text>
          Alyce Roselle G. Panganiban is a 3rd Year BS Computer Science student at De La Salle Lipa.
          She has participated in many group projects such as Route Trace, 365 Wonders Booking 
          Reservations Service website, and IMMEDIAID.
        </Card.Text>
      </Card.Body>
    </Card>
    </section>

    </>
  );
};

export default Portfolio;