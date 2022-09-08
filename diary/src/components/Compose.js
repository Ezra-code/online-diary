import { useEffect, useState } from "react";
import "./App.css";

const Compose = () => {
  const [note, setNote] = useState({
    emotion: "",
    details: "",
  });

  let i = 0;

    let emotions = ["Happy", "Sad", "Angry", "Calm", "Lazy", "Energetic"];
    //handleform submission 
    function handlSubmit() {
        console.log("New")
    }

    //handle input change

    function HandleChange() {
        
    }
    
    //handle selection of feeling
  function handleClick(p) {
    if (i < emotions.length) {
      i++;
      console.log(i);
    }
  }
  let radr = emotions.map((element) => (
    <button className="emote" onClick={() => {handleClick()}}>{element}</button>
  ));

  return (
    <div className="compose">
      <h1>Write About your Day</h1>
      <h2>(How do you feel abut your day)</h2>
          <div className="combine">{radr}</div>
          
      <form onSubmit={handlSubmit}>
        <div className="name">
          <div className="left">
            <label htmlFor="name" className="form-label">
              Mood:
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Enter first name"
              className="form-control"
              name="emotion"
              value={note.emotion}
              onChange={HandleChange}
              required
            />
          </div>
          <div className="right">
            <label htmlFor="name" className="form-label">
              Details
            </label>{" "}
            <br />
            <textarea
              type="text"
              placeholder="why do you feels so"
              className="form-control"
              name="details"
              value={note.details}
              onChange={HandleChange}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
