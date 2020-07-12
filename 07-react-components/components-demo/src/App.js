import React, {useState} from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import HelloWorldClass from './components/HelloWorld/HelloWorldClass';
import CountdownClass from './components/Countdown/CountdownClass';


function App() {
  const [isCountdownVisible, setIsCountdownVisible] = useState(true)

  /**
   * this will be called in the countdown 
   * wants to be destroyed - when reacing zero
   */
  const zeroCb = () => {

    // ...
    setIsCountdownVisible(false);

  }

  return (
    <div className="App">
      <h1>
        React Components
      </h1>

      <HelloWorld name={'Yariv'} age={35} />

      <HelloWorldClass name={'Yariv'} age={35} />

      <h1>
        Countdown example
      </h1>

      {
        isCountdownVisible && (
          <CountdownClass cb={zeroCb} />
        )
      }
      
    </div>
  );
}

export default App;
