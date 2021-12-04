/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react';
import { BingoContext } from '../App.jsx';
// import { useState } from 'react-dom';

export default function Header() {
  const { headerText, gameInfo } = useContext(BingoContext);
  return (
    <div className="header">
      <h1 className="headerText">{ headerText }</h1>
      <div>{ `Welcome ${gameInfo.user} to ${gameInfo.room}!` }</div>
    </div>
  );
}
