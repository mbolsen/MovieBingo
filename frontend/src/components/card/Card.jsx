/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React, { useContext, useState } from 'react';
import { BingoContext } from '../App.jsx';

export default function Card() {
  const [size, setSize] = useState(document.body.clientWidth / 5 - 6); // 6 is for the boarder of the .card
  const { items } = useContext(BingoContext);

  const selectedColor = 'pink';
  screen.orientation.addEventListener('change', () => { setSize(document.body.clientWidth / 5); });

  const handleChangeColor = (id) => {
    document.getElementById(id).style.backgroundColor = selectedColor;
    // TODO: change the boardState here
  };

  return (
    <div className="card">
      { (console.log(size)) }
      {/* <div className="card-col" style={{ width: size }}>
        { items
          ? items.slice(0, 5).map((item, index) => <div className="card-div" id={index} key={index} onClick={(e) => handleChangeColor(e)}>{ item }</div>)
          : null }
      </div>
      <div className="card-col" style={{ width: size }}>
        { items
          ? items.slice(5, 10).map((item, index) => <div className="card-div" id={index + 5} key={index} onClick={(e) => handleChangeColor(e)}>{ item }</div>)
          : null }
      </div>
      <div className="card-col" style={{ width: size }}>
        { items
          ? items.slice(10, 12).map((item, index) => <div className="card-div" id={index + 10} key={index} onClick={(e) => handleChangeColor(e)}>{ item }</div>)
          : null }
        <div className="card-div" style={{ fontSize: '100px', background: selectedColor }}>&#x2605;</div>
        { items
          ? items.slice(13, 15).map((item, index) => <div className="card-div" id={index + 10} key={index} onClick={(e) => handleChangeColor(e)}>{ item }</div>)
          : null }
      </div>
      <div className="card-col" style={{ width: size }}>
        { items
          ? items.slice(15, 20).map((item, index) => <div className="card-div" id={index + 15} key={index} onClick={(e) => handleChangeColor(e)}>{ item }</div>)
          : null }
      </div>
      <div className="card-col" style={{ width: size }}>
        { items
          ? items.slice(20, 25).map((item, index) => <div className="card-div" id={index + 20} key={index} onClick={(e) => handleChangeColor(e)}>{ item }</div>)
          : null }
      </div> */}
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
              onClick={(e) => handleChangeColor(index)}
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
