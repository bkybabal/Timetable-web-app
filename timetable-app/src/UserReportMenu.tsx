
import React from 'react';
import { useState } from 'react';

const [selectedFruit, setSelectedFruit] = useState('banana');

const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  setSelectedFruit(event.target.value);
  };

const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
  alert(`Your favorite fruit is: ${selectedFruit}`);
  event.preventDefault();
};

const UserReportMenu = () => {
  return (
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="apple" 
          checked={selectedFruit === 'apple'} 
          onChange={handleChange} 
        /> Apple
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="banana" 
          checked={selectedFruit === 'banana'} 
          onChange={handleChange} 
        /> Banana
      </label>
      <br />
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="cherry" 
          checked={selectedFruit === 'cherry'} 
          onChange={handleChange} 
        /> Cherry
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}


export default UserReportMenu