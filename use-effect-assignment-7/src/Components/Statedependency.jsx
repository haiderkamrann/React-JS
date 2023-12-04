import { useEffect, useState } from 'react';

const Nodependency = () => {
  const [backgroundColor, setBackgroundColor] = useState('grey');

  useEffect(() => {
    console.log('Effect is running!', 'and the background color is: ', backgroundColor);
    document.body.style.backgroundColor = backgroundColor;

    //Cleanup Function
    return () => {
        console.log('Cleanup function is running!');
        document.body.style.backgroundColor = '';
    }

  }, [backgroundColor]); 

  return (
    <div>
      <h5 style={{color: "blue"}}>This background color change is the example of useEffect with Array and state pass as dependency. In this example, I have also used the cleanup function.</h5>
      <button onClick={() => setBackgroundColor('#89cc9b')}> Change Background Color </button>
    </div>
  );
};

export default Nodependency;
