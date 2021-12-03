/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { shuffle } from '../helperFunctions.js';
import Card from './card/Card.jsx';
import Header from './header/Header.jsx';

export const BingoContext = React.createContext();

export default function App() {
  const [boardState, setBoardState] = useState([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);
  const [items, setItems] = useState([]);

  const getItems = () => {
    // call server and get card items
    axios.get('/card')
      .then((response) => {
        console.log('response', response);
        setItems(shuffle(response.data));
      });
  };

  const changeBoardState = () => {
    setBoardState();
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <BingoContext.Provider value={{ items, changeBoardState }}>
        <div>
          <Header />
          <Card />
          {/* <div className="text">Hello There</div> */}
        </div>
      </BingoContext.Provider>
    </div>
  );
}
