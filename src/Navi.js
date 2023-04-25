import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';
import Logo from './Logo';

function Navi(props) {
  const { Toggle} = props;
  return (
    <Navbar bg="success" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand onClick={()=> Toggle("showSlider")} style={{cursor:'pointer'}} >
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto Font-Size">
            <Nav.Link  onClick={()=> Toggle("showSlider")} >Home</Nav.Link>
            <Nav.Link  onClick={()=> Toggle("showPrice")}>Pricing</Nav.Link>
            <Nav.Link  onClick={()=> Toggle("showContact")} >Contact us</Nav.Link>
            <Nav.Link  onClick={()=> Toggle("showAbout")}>About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;