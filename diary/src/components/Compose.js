import { useEffect, useState } from "react";
import "./App.css";

const Compose = () => {
  const [note, setNote] = useState({
    emotion: "",
    details: "",
  });
  let emotions = ["Happy", "Sad", "Angry", "Calm", "Lazy", "Energetic"];

  let radr = emotions.map((element) => (
    <button className="emote">{element}</button>
  ));

  return (
    <div className="compose">
      <h1>Write About your Day</h1>
      <h2>How do you feel abut your day</h2>

      <div className="combine">{radr}</div>
    </div>
  );
};

export default Compose;
