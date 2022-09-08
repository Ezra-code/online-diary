import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'


const Events = () => {
    const [event, setEvent] = useState("")
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:9292/emotions/${id}`)
            .then(r => r.json())
        .then(data => setEvent(data))
    }, [id])
    
    console.log(event)
    return ( <p>this is here and now</p> );
}
 
export default Events;