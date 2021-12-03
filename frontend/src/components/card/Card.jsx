/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

export default function Card() {
  // const [user, setUser] = useState();

  return (
    <div className="card">
      <div className="card-col">
        <div className="card-div">1</div>
        <div className="card-div">running up the stairs</div>
        <div className="card-div">3</div>
        <div className="card-div">4</div>
        <div className="card-div">5</div>
      </div>
      <div className="card-col">
        <div className="card-div">1</div>
        <div className="card-div">2</div>
        <div className="card-div">Star</div>
        <div className="card-div">4</div>
        <div className="card-div">obvious fake mustache</div>
      </div>
      <div className="card-col">
        <div className="card-div">1</div>
        <div className="card-div">2</div>
        <div className="card-div">3</div>
        <div className="card-div">dropped keys</div>
        <div className="card-div">5</div>
      </div>
    </div>
  );
}
