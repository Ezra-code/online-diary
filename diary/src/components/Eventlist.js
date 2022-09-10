import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Events = () => {
  const [notes, setNotes] = useState([]);
  const { id } = useParams();
  const [show, setShow] = useState(false);
  let [change, setChange] = useState({
    title: "",
    body: ""
  })

  useEffect(() => {
    fetch(`http://localhost:9292/emotions/${id}`)
      .then((r) => r.json())
      .then((data) => {
        let parsed = data.events;
        setNotes(parsed);
      });
  }, [id]);

  function handleDelete(ele) {
    console.log(ele.id);
  }
//handle the form submission for edit
  function handleSubmit() {
    
  }

  function handleCopy(param) {
    navigator.clipboard.writeText(param.body);
  }

  function handleEdit(element) {
    setShow(!show);
    console.log(`edit:${element.body}`, element.title);
  }

  function handleSound(param) {
    let utterance = new SpeechSynthesisUtterance(
      `${param.title}, ${param.body}`
    );
    speechSynthesis.speak(utterance);
    console.log(param.id);
  }

  const eve = notes.map((element) => {
    let uploadDate = element.created_at;
    let newDate = uploadDate.split("T");
    return (
      //display the title and creation date for element from events table
      <div className="story-prev" key={element.id}>
        <div className="nav">
          <h1>{element.title}</h1>
          <div className="time">
            <h2>
              <span>Created Date:</span> {newDate[0]}{" "}
            </h2>
            <h2>
              <span>Created Time:</span> {newDate[1]}{" "}
            </h2>
          </div>
        </div>

        <div className="body">
          <p>{element.body}</p>
          <div className="features">
            <ul>
              <li
                className="sound"
                onClick={() => {
                  handleSound(element);
                }}
              >
                <i className="fa-solid fa-volume-high"></i>
              </li>
              <li
                className="copy"
                onClick={() => {
                  handleCopy(element);
                }}
              >
                <i className="fa-solid fa-copy"></i>
              </li>
            </ul>
          </div>

          {/* allow editing of data create form */}
          {show ? (
            <form onSubmit={handleSubmit}>
              <input type="text" name="title" value={element.title} id="change" onChange={(e)=>{setChange(e.target.value)}}/>
              <textarea name="body" id="" cols="30" rows="10" value={element.body} onChange={(e)=>{setChange(e.target.value)}} />
              <input type="submit"  value="Save change"/>
            </form>
          ) : null}
        </div>
        
        <div className="btn">
          <button
            onClick={() => {
              handleDelete(element);
            }}
            id="del"
          >
            {" "}
            Delete{" "}
          </button>
          <button
            className="edit"
            onClick={() => {
              handleEdit(element);
            }}
          >
            {" "}
            Edit{" "}
          </button>
        </div>
      </div>
    );
  });

  return <div className="prev">{eve}</div>;
};

export default Events;
