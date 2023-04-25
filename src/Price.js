import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./price.css";
import { animated, useSpring } from 'react-spring';


function Price() {
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
      <div className="container text-center">
        <p className="fs-2 ">
          Our Exclusive Offer: Affordable Driving Services for Your Convenience
        </p>
        <Container fluid="md">
          <Row>
            <Col className="shadow rounded mx-3">
              <div className="fs-5 ">
                Transparent Pricing: Know Exactly What You're Paying For{" "}
              </div>
              <p className=" price ">
                
                <span className="fs-1 ">
                  <sup className="sup">&#8360;</sup>
                </span>
                16,000
              </p>
              <div className="">
                <b>Prices Vary by Hood: We Keep It Real with Our Local Rates</b>
              </div>
              <div className="py-2">
              Our driving service offers comprehensive 7-day training with 45-minute sessions in automatic and manual vehicles. Registration and learning license are included, and we provide pick and drop service for convenience. Sign up now to learn to drive with ease and confidence
              </div>
            </Col>
            <Col className="shadow rounded mx-3">
              <p className="fs-4 pt-4">
                Our Driving Service is Currently Available in the Following
                Areas
              </p>
              <ul className="list-group list-group-horizontal justify-content-center flex-wrap ">
                <li className="list-group-item "><b>Jamshed Road</b></li>
                <li className="list-group-item "><b>Defence</b></li>
                <li className="list-group-item "><b>PECHS</b></li>
                <li className="list-group-item "><b>Bahadurabad</b></li>
                <li className="list-group-item "><b>Baloch Colony</b></li>
                <li className="list-group-item "><b>Gulshan-e-Iqbal</b></li>
              </ul>
              <p className="fs-5 m-0"><b>Included:</b> Registration and Learning License</p>
              <p className="fs-5 m-0"><b>Class Duration:</b> 45 Minutes per Session</p>
              <p className="fs-5 m-0"><b>Pick and Drop Service:</b> Available for Your Convenience</p>
              <p className="fs-5 m-0"><b>7-Day Training Program:</b> Comprehensive Instruction for Safe and Confident Driving</p>
              <p className="fs-5 m-0"><b>Shift Gears Your Way:</b> Automatic and Manual Available</p>
            </Col>
          </Row>
        </Container>
      </div>
      </animated.div >
      </animated.div >
    </>
  );
}

export default Price;
