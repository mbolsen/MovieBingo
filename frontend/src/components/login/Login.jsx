/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable react/function-component-definition */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BingoContext } from '../App.jsx';

export default function Login() {
  const { handleGameInfo } = useContext(BingoContext);

  const [rooms, setRooms] = useState([]);
  const [roomSelected, setRoomSelected] = useState();
  // let tempRoom = 0;

  const handleGetRooms = () => {
    axios.get('/getRooms')
      .then((response) => {
        console.log('get rooms now', response.data),
        setRooms(response.data);
      });
  };

  const handleAddRoom = (room) => {
    // const room = event.target.newRoom.value;
    axios.post(`/addRoom/${room}`)
      .then(
        handleGetRooms(),
      );
  };

  useEffect(() => {
    handleGetRooms();
  }, []);

  return (
    <div>
      <hr />
      {/* Create a new Room */}
      <div className="addRoom">
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.newRoom.value);
          handleAddRoom(e.target.newRoom.value);
        }}
        >
          <label className="label">
            Add a Room:
            <input className="form" type="text" name="newRoom" />
          </label>
          <button className="button" type="submit">Add Room</button>
        </form>
      </div>
      <hr />
      {/* login to the room. */}
      <div className="login">
        <form onSubmit={(event) => {
          event.preventDefault();
          // console.log(event.target.username.value, roomSelected || rooms[0])
          handleGameInfo({ user: event.target.username.value, room: roomSelected || rooms[0] });
        }}
        >
          <label className="label">
            Room Name
            <select className="form" onChange={(event) => { setRoomSelected(event.target.value); }}>
              <option disabled>Please select a room</option>
              { rooms
                ? rooms.map((room, index) => (
                  <option
                    id={index}
                    key={index}
                    name={room}
                    value={room}
                  >
                    { room }
                  </option>
                ))
                : <option disabled>Please Create a Room</option> }
            </select>
          </label>
          <label className="label">
            User Name
            <input className="form" type="text" name="username" />
          </label>
          <button className="button" type="submit">Join Room</button>
        </form>
      </div>
    </div>
  );
}
