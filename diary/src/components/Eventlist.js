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
    

    const eve = notes.map((element) => {
        let uploadDate = element.created_at
        let newDate = uploadDate.split("T")
        const formatter = new Intl.RelativeTimeFormat('en')

        const diff = new Date() - new Date(newDate[0])

        const disp = formatter.format(Math.round(-diff / (1000*60 * 60)), 'hour')


        return (
            <div className="story-prev" key={element.id}>
                <h1>{element.title}</h1>
                <h2><span>Created:</span> {disp}</h2>
                <button>Delete</button>
            </div>
        )
    }
    )
    console.log(eve)
    return (
        <div className="prev">
            {eve}
        </div>
    );
}
 
export default Events;