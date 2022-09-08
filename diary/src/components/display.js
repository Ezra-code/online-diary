import React from "react";
import { Link } from 'react-router-dom'

function Display({ emote }) {
    return (
      <p id="feels" key={emote.id}>
        <Link to={`events/${emote.id}`}>{emote.name}</Link>
      </p>
    );
}

export default Display