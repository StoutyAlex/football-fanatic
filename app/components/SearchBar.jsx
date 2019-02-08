import React, { useState } from 'react';

const Search = ({onSearch}) => {
  const [searchTerm, setTerm] = useState('');
  const [typing, setTyping] = useState(false);

  const onChange = event => {
    setTerm(event.target.value);

    
    onSearch(searchTerm);
  }

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      onChange(event);
    }
  }

  return (
    <div>
      <input 
        onChange={onChange}
        value={searchTerm}
        onKeyPress={onKeyPress}/>
    </div>
  );
};

export default Search;
