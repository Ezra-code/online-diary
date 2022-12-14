import { useState } from "react";
import "./App.css";

const Compose = () => {
  const [note, setNote] = useState({
    emotion:"",
    details: "",
    tittle: ""
  });

    let emotions = ["Happy", "Sad", "Angry", "Calm", "Lazy", "Energetic"];
    let i;
  

    //handleform submission 
    function handlSubmit(e) {
        e.preventDefault()
      const formData = {
            title: note.tittle,
            body: note.details,
            emotion_id: note.emotion

        }

        console.log(formData)

        fetch("https://online-diary-ezra.herokuapp.com/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then
          // histry.push('/')
          ();
      
      setNote({
        emotion: "",
        details: "",
        tittle: "",
      });

    }

    //handle input change

    function HandleChange(event) {
        const name = event.target.name
        const value = event.target.value

        setNote({ ...note, [name]: value })
        // console.log(note)
    }
    
    //handle selection of feeling
  function handleClick(p) {
      switch (p) {
        case "Happy":
          i = 1;
              setNote({ ...note, emotion: i })
          break;
        case "Sad":
          i = 2;
              setNote({ ...note, emotion: i });
              console.log(i);
          break;
        case "Angry":
          i = 3;
              setNote({ ...note, emotion: i });
              console.log(i);
          break;
        case "Calm":
          i = 4;
              setNote({ ...note, emotion: i });
              console.log(i);
          break;
        case "Lazy":
          i = 5;
              setNote({ ...note, emotion: i });
              console.log(i);
          break;
        case "Energetic":
          i = 6;
              setNote({ ...note, emotion: i });
              console.log(i);
              break;
        default:
          console.log("try the next buttons");
      }
  }
  let radr = emotions.map((element) => (
    <button className="emote" onClick={() => {handleClick(element)}}>{element}</button>
  ));

  return (
    <div className="compose">
      <h1>Write About your Day</h1>
      <h2>(How do you feel abut your day)</h2>
      <div className="combine">{radr}</div>

      <form onSubmit={handlSubmit}>
        <div className="name">
          <div className="left">
            <label htmlFor="mood">Mood:</label> <br />
            <input
              type="text"
              placeholder="choose your mood"
              name="emotion"
              value={note.emotion}
              onChange={HandleChange}
              required
              disabled
            />
          </div>

          <div className="left">
            <label htmlFor="mood">Title:</label> <br />
            <input
              id="title"
              type="text"
              placeholder="Title"
              name="tittle"
              value={note.tittle}
              onChange={HandleChange}
              required
            />
          </div>

          <div className="right">
            <label htmlFor="mood">Details</label> <br />
            <textarea
              type="text"
              placeholder="why do you feels so"
              name="details"
              value={note.details}
              onChange={HandleChange}
              required
            />
          </div>

        </div>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Compose;
