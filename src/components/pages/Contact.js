import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

export default function Form() {
  const [Name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'Name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue)
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    
    }
    alert (`Hello ${Name}`);

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };
  return (
    <div>
      <h1>Contact Me</h1>
      <form className='form>'>
        <input
          value={Name}
          name='Name'
          onChange={handleInputChange}
          type='text'
          placeholder='name'
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <textarea
          value={message}
          name='message'
          onChange={handleInputChange}
          type='text'
          placeholder='Message'
        />
        <button type='button' onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

