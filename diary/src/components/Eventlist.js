import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Events = () => {
  const [notes, setNotes] = useState([]);
  const { id } = useParams();

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

  const eve = notes.map((element) => {
    let uploadDate = element.created_at;
    let newDate = uploadDate.split("T");
    return (
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

        <div className="body">{element.body}</div>

        <div className="btn">
          <button onClick={() => { handleDelete(element); }} id="del"> Delete </button>
          <button className="edit">Edit</button>
        </div>
      </div>
    );
  });
  console.log(eve);
  return <div className="prev">{eve}</div>;
};

export default Events;
