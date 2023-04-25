import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import MapContainer from "./MapContainer";
// import './mapContainer.css';
import { animated, useSpring } from 'react-spring';




function Contact() {
  const styles = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: { duration: 500 } // fade duration in milliseconds
  
  })
   const springs = useSpring({
    from: { y: 20 },
    to: { y: 0 },
  })
  return (
    <>
     <animated.div style={styles} >
    <animated.div style={springs} >
      {/* <h1> STUCK IN JAM ?? NO WORRY WE'LL TELL HOW TO DEAL WITH IT</h1> */}
      <div className="container text-center">
        <p className="fs-2 ">Xpert Car Driving School Contact Information</p>
        <Container fluid="md">
          <Row>
            <Col className="shadow rounded mx-3 ">
              <div className="fs-1 ">Location</div>
              <div
                className="map-container"
              >
                {/* <MapContainer /> */}
              </div>
            </Col>
            <Col className="shadow rounded mx-3">
              <p className="fs-3 pt-4">
                Contact Us Now for Admission and Program Details
              </p>
              <p className="fs-3 ">+92-333-3165319 (only for ladies)</p>
              <ul className="list-group list-group-horizontal justify-content-center flex-wrap  ">
                <a href="https://www.facebook.com/Xpert-Car-Driving-School-697827833596786/">
                  <li className="list-group-item rounded mx-2">
                    <i className="bi bi-facebook fs-1 "></i>
                  </li>
                </a>
                <a href="https://wa.me/923333165319">
                  <li className="list-group-item rounded">
                    <i className="bi bi-whatsapp fs-1"></i>
                  </li>
                </a>
                <a href="mailto:aliajaz32.aa@gmail.com">
                  <li className="list-group-item rounded mx-2">
                    <i className="bi bi-mailbox fs-1  "></i>
                  </li>
                </a>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      </animated.div >
      </animated.div >
    </>
  );
}

export default Contact;
