/**
 * We want to send data to
 * RecieveData component
*/

import React, { useContext } from 'react';
import HelloContext from '../../hello.context';

function SendData(props) {
    const {setMessage} = useContext(HelloContext);

    /**
     * In this function we want to send 'hello' to the other component
     */
    const handleSend = () => {
        setMessage('this is a message from the child');
    }

    return (
      <div>
        <button onClick={handleSend}>Send data</button>
      </div>
    );
}

export default SendData;