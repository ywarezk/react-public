/**
 * We will get the data from the other component and print it to the screen
 */

import React, {useContext} from 'react';
import HelloContext from '../../hello.context';

const RecieveData = () => {
    const {message} = useContext(HelloContext);

    return (
      <div>
        <h1>The data we got is: {message}</h1>
      </div>
    );
};

export default RecieveData;