import React from "react";
// import { Link } from 'react-router-dom'

function Display({ emote }) {
    return (
        <p id="feels" key={emote.id}>{emote.name}</p>
    );
}

export default Display