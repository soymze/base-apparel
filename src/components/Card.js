import React, { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div>
      <h1>We're coming soon</h1>
      <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default EmailSignup;
