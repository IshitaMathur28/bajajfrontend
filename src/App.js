import React, { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState([]);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://bajajbackend-seven.vercel.app/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: inputData,
      });
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Your Roll Number (website title)</h1>
      <textarea
        placeholder='Enter JSON here'
        value={inputData}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      
      {responseData && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
