import { useState } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      const randomCode = Math.floor(Math.random() * 100000);
      setInputValue(`${randomCode}`);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <div style={{ position: 'relative' }}>
          <button onClick={handleButtonClick}>Generate SKU</button>
          {isLoading && <div className="loader" style={{ position: 'absolute', top: '39%', left: '4%', transform: 'translate(-50%, -50%)' }}></div>}
        </div>
      </div>
    </div>
  );
}

export default App;
