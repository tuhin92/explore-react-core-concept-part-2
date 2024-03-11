import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);


    // add players 
    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    // remove players 
    const handleRemove = () =>{
        const newTeam = team - 1;
        setTeam(newTeam);
    }



    const teamStyle = {
        border: '3px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '20px',
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}