/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React, { useContext, useState } from 'react';
import { BingoContext } from '../App.jsx';

export default function Card() {
  const [size, setSize] = useState(document.body.clientWidth / 5 - 6);
  const { items, changeBoardState } = useContext(BingoContext);

  const selectedColor = 'pink';
  screen.orientation.addEventListener('change', () => { setSize(document.body.clientWidth / 5); });

  const handleChangeColor = (id) => {
    document.getElementById(id).style.backgroundColor = selectedColor;
    // TODO: change the boardState here
    changeBoardState(id);
  };

  return (
    <div className="card">
      { (console.log('size', size)) }
      { items
        ? items.map((item, index) => {
          if (index === 12) {
            return (
              <div
                className="card-div"
                key={index}
                id={index}
                style={{ width: size, fontSize: '100px', background: selectedColor }}
              >
                &#x2605;
              </div>
            );
          }
          if (index > 24) {
            return null;
          }
          return (
            <div
              className="card-div"
              id={index}
              key={index}
              onClick={(e) => {
                e.preventDefault();
                handleChangeColor(index);
              }}
              style={{ width: size }}
            >
              <p>{ item }</p>
            </div>
          );
        })
        : null }
    </div>
  );
}
