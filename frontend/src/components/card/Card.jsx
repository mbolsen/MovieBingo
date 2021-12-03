/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React, { useContext, useState } from 'react';
import { BingoContext } from '../App.jsx';

export default function Card() {
  const [size, setSize] = useState(document.body.clientWidth / 5);
  const { items } = useContext(BingoContext);

  screen.orientation.addEventListener('change', () => { setSize(document.body.clientWidth / 5); });

  return (
    <div className="card">
      { (console.log(size)) }
      <div className="card-col" style={{ width: size }}>
        <div className="card-div">{items[1]}</div>
        <div className="card-div">{items[2]}</div>
        <div className="card-div">{items[3]}</div>
        <div className="card-div">{items[4]}</div>
        <div className="card-div">{items[5]}</div>
      </div>
      <div className="card-col" style={{ width: size }}>
        <div className="card-div">{items[6]}</div>
        <div className="card-div">{items[7]}</div>
        <div className="card-div">{items[8]}</div>
        <div className="card-div">{items[9]}</div>
        <div className="card-div">{items[10]}</div>
      </div>
      <div className="card-col" style={{ width: size }}>
        <div className="card-div">{items[11]}</div>
        <div className="card-div">{items[12]}</div>
        <div className="card-div" style={{ fontSize: '100px' }}>&#x2605;</div>
        <div className="card-div">{items[13]}</div>
        <div className="card-div">{items[14]}</div>
      </div>
      <div className="card-col" style={{ width: size }}>
        <div className="card-div">{items[15]}</div>
        <div className="card-div">{items[16]}</div>
        <div className="card-div">{items[17]}</div>
        <div className="card-div">{items[18]}</div>
        <div className="card-div">{items[19]}</div>
      </div>
      <div className="card-col" style={{ width: size }}>
        <div className="card-div">{items[20]}</div>
        <div className="card-div">{items[21]}</div>
        <div className="card-div">{items[22]}</div>
        <div className="card-div">{items[23]}</div>
        <div className="card-div">{items[24]}</div>
      </div>
    </div>
  );
}
