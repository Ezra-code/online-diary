import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'


const Events = () => {
    const [notes, setNotes] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:9292/emotions/${id}`)
            .then(r => r.json())
            .then(data => {
                let parsed = data.events
                setNotes(parsed)
        })
    }, [id])
    

    const eve = notes.map((element) => <div className="story-prev" key={element.id}>   <h2>{element.created_at}</h2> </div>)
    console.log(eve)
    return (
        <div>
            {eve}
        </div>
    );
}
 
export default Events;