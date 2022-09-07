import { useEffect, useState } from "react";


const Home = () => {
    let [emote, setEmote] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/emotions")
            .then(r => r.json())
        .then(data => console.log(data))
    }, [])

    return (<p>this is the hompage</p>);
}
 
export default Home;