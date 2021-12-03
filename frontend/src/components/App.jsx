/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import Card from './card/Card.jsx';
import Header from './header/Header.jsx';

export default function App() {
  // const [user, setUser] = useState();

  return (
    <div>
      <Header />
      <Card />
      <div className="text">Hello There</div>
    </div>
  );
}
