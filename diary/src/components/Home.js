import './App.css'
import { useEffect, useState } from "react";
import Display from './display';

const Home = () => {
    let [emote, setEmote] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/emotions")
            .then(r => r.json())
        .then(data => setEmote(data))
    }, [])

    console.log(emote)

    const dispEmote = emote.map((element) => 
        <Display emote={element} key={element.id } />)

    return (
      <>
        <h1 className="feels">How you feeling today</h1>
            <div className="container">
                {dispEmote}
            </div>
      </>
    );
}
 
export default Home;