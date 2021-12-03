/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { shuffle } from '../helperFunctions.js';
import Card from './card/Card.jsx';
import Header from './header/Header.jsx';

export const BingoContext = React.createContext();

export default function App() {
  const items1 = ['Obvious fake moustache',
    'Squeaky door sound',
    'First person view',
    'Going rouge',
    'Old truck',
    'Vehicle breakdown',
    'No phone service',
    'Obsolete tech',
    'Hiding under a bed',
    'Costumes',
    'Dirty bathroom',
    'Black and White film',
    'Unconventional weapon',
    'Bad accent',
    'Law enforcement',
    'Mental hospital',
    'Car ride conversation',
    'Close call',
    'Plot call back',
    'Mental breakdown'];
  // const [user, setUser] = useState();
  const [items, setItems] = useState([]);

  const getItems = () => {
    // call server and get Items
    axios.get('/card')
      .then((response) => {
        console.log('response', response);
        setItems(shuffle(response.data));
      });
  };

  useEffect(() => {
    // console.log('here');
    getItems();
  }, []);

  return (
    <div>
      <BingoContext.Provider value={{ items }}>
        <div>
          <Header />
          <Card />
          {/* <div className="text">Hello There</div> */}
        </div>
      </BingoContext.Provider>
    </div>
  );
}
