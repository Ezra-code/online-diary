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

    const dispEmote = emote.forEach(element => {
        console.log(element.name)
    })

    return (
        <>
            <h1 className='feels'>How you feeling today</h1>
            <Display />
        </>
    );
}
 
export default Home;