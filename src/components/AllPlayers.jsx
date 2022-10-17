import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {fetchAllPlayers} from "../API";


function AllPlayers(){
    const navigate = useNavigate();
    const [players, setPlayers]= useState([]);

useEffect(() => {
    async function getAllPlayers(){
        const players = await fetchAllPlayers()
        setPlayers(players);
    }
    getAllPlayers();
}, []);

console.log(players);

    return <div>
    <h4>Players:</h4>;
        {players.map((player)=>{
            return <div>
               <img style={{height: '250px'}}
               src={player.imageUrl}/>
               <h4>{player.name}</h4>
               <button onClick={()=>{
                    navigate(`/players/${player.id}`);
               }}>See Details</button>
            </div>})
            }
            </div>;
}
            
export default AllPlayers;