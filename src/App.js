import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navi from "./Navi";
import Slider from "./Slider";
import { useState } from "react";
import Contact from "./Contact";
import About from "./About";
import Price from "./Price";
import { animated, useSpring } from 'react-spring';


function App() {
  // const [route, setRoute] = useState("None");

  // const Toggle = () => {
  //   setRoute("");
  // };
  const styles = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: { duration: 500 },// fade duration in milliseconds

  })
  const [state, setState ] = useState({
    showSlider: true,
    showPrice: false,
    showContact: false,
    showAbout: false
  });
  const Toggle = (key) =>{
    setState({
      showSlider: key === "showSlider",
      showPrice: key === "showPrice",
      showContact: key === "showContact",
      showAbout: key === "showAbout"
    });
  };

  return (
    <>
      <div className="App">
        <Navi Toggle={Toggle} />
        <animated.div style={styles} >
        {state.showSlider &&
          <div>
            <Slider />
          </div>
          }
          {state.showPrice &&
        <div>
          <Price />
        </div>
        }
        {state.showContact &&
        <div>
          <Contact />
        </div>
        }
        {state.showAbout &&
        <div>
          <About />
        </div>
        }
        </animated.div>
      </div>
    </>
  );
}

export default App;
