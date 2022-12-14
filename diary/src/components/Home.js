import './App.css'
import { useEffect, useState } from "react";
import Display from './display';

const Home = () => {
    let [emote, setEmote] = useState([])

    useEffect(() => {
        fetch("https://online-diary-ezra.herokuapp.com/emotions")
          .then((r) => r.json())
          .then((data) => setEmote(data));
    }, [])

    console.log(emote)

    const dispEmote = emote.map((element) => 
        <Display emote={element} key={element.id } />)

    return (
      <>
        <h1 className="feels">Remenisce on the Good, choose category</h1>
            <div className="container">
                {dispEmote}
            </div>
      </>
    );
}
 
export default Home;