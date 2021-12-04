/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { shuffle, checkForWin } from '../helperFunctions.js';
import Card from './card/Card.jsx';
import Header from './header/Header.jsx';
import Login from './login/Login.jsx';

export const BingoContext = React.createContext();

export default function App() {
  const [headerText, setHeaderText] = useState('Scary Movie Bingo');
  const [gameInfo, setGameInfo] = useState({ room: '-', user: 'empty' });
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

  const handleGameInfo = ({ room, user }) => {
    setGameInfo({ room, user });
  };

  const postBoard = () => {
    // check to see if this console log works
    console.log(...gameInfo.user);
    axios.put('/updateboard', { ...gameInfo.user, boardState });
  };

  const changeBoardState = (index) => {
    const updatedBoard = [...boardState];
    updatedBoard[index] = 1;
    setBoardState(updatedBoard);
  };

  useEffect(() => {
    getItems();
    return () => { setItems(); };
  }, []);

  useEffect(() => {
    postBoard();
    const check = checkForWin(boardState);
    console.log(check);
    if (check === 'blackout') {
      setHeaderText('!!!! BLACKOUT !!!!');
    } else if (check) {
      setHeaderText('!!!  WINNER  !!!');
    }
    // return () => { setHeaderText([]); };
  }, [boardState]);

  const values = useMemo(() => ({
    items, changeBoardState, headerText, handleGameInfo, gameInfo,
  }), []);

  return (
    <div>
      <BingoContext.Provider value={values}>
        <div>
          <Header />
          { (gameInfo.user !== 'empty')
            ? <Card />
            : <Login />}
        </div>
      </BingoContext.Provider>
    </div>
  );
}
