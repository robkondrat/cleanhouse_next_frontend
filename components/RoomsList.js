import { useState, useEffect } from 'react';
import Room from "./Room";
import axios from 'axios';
import styled from 'styled-components';

export default function RoomsList() {
  useEffect(() => {
    axios.get('/api/rooms')
      .then(res => setRooms(res.data))
  }, []);

  const [rooms, setRooms] = useState([]);

  return (
    <div className="rooms-list">
      {rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </div>

  )
}