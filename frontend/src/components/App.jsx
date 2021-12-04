/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { shuffle, checkForWin } from '../helperFunctions.js';
import Card from './card/Card.jsx';
import Header from './header/Header.jsx';

export const BingoContext = React.createContext();

export default function App() {
  const [headerText, setHeaderText] = useState('Scary Movie Bingo');
  const [boardState, setBoardState] = useState(
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  );
  const [items, setItems] = useState([]);

  const getItems = () => {
    // call server and get card items
    axios.get('/card')
      .then((response) => {
        console.log('response', response);
        setItems(shuffle(response.data));
      });
  };

  const postBoard = () => {
    console.log(boardState);
    const user = 'thisisme';
    axios.put('/updateboard', { user, boardState });
  };

  const changeBoardState = (index) => {
    const updatedBoard = [...boardState];
    updatedBoard[index] = 1;
    setBoardState(updatedBoard);
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    postBoard();
    if (checkForWin(boardState)) {
      console.log('winner!!!');
      setHeaderText('!!!  WINNER  !!!');
    }
  }, [boardState]);

  return (
    <div>
      <BingoContext.Provider value={{ items, changeBoardState, headerText }}>
        <div>
          <Header />
          <Card />
          {/* <div className="text">Hello There</div> */}
        </div>
      </BingoContext.Provider>
    </div>
  );
}
