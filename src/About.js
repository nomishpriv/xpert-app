import React from "react";
import CountUp from "react-countup";
import "./about.css";
import { animated, useSpring } from 'react-spring';


function About() {
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
  const currentYear = new Date().getFullYear();

  return (
    <>
     <animated.div style={styles} >
    <animated.div style={springs} >
      <div className="container text-center">
        <h1>Xpert Driving School</h1>
        <div className="fs-2">
          Xpert Driving Service is a renowned driving school that has been
          serving its clients since 2008. We are proud to have helped hundreds
          of students become confident drivers and pass their driving test with
          flying colors.
        </div>
        <div className="fs-3 ">
          <p>Years of Experience: Providing Top-Quality Service Since</p>
          <span className="text-danger" style={{fontSize:"100px", fontWeight:"bolder"}}>
          <CountUp
            start={2008}
            end={currentYear}
            duration={8}
            delay={2}
            formattingFn={(n) =>
              n.toLocaleString("en-US", { useGrouping: false })
            }
          />
          </span>
        </div>
        
      </div>
      </animated.div >
      </animated.div >
    </>
  );
}

export default About;
