import React, { useState } from 'react';
import './Header.css';

function InputField() {
  const [searchResults, setSearchResults] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${inputText}`);
      const data = await response.json();
      setSearchResults(data.items); 
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputText(inputValue); 
    console.log(inputValue);
  };
 
  return (
    <div className="inputFieldContainer">
      <div>
        <ol id='printItems'>
          {searchResults.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      </div>
      <div className="textArea">
        <input 
          type="text" 
          value={inputText} 
          onChange={handleInputChange} 
          placeholder="Enter the repo..." 
        spellCheck='false'/>
        <button className="sendButton" onClick={handleSearch}>Send</button>
      </div>
      
      
    </div>
  );
}

export default InputField;
