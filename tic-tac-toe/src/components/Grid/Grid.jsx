import {useState} from "react";
import Card from "../Card/Card";
import "./Grid.css";

function Grid({numberOfCards}){
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true);  //true => o, flase => x
    return(
        <div className="grid-wrapper">
            <h1 className= "turn-highlight">Current turn: {(turn)? 'o' : 'x'}</h1>
            <div className="grid">
            {board.map((el,idx)=> <Card key= {idx} />)}
        </div>
        </div>
    );

}

export default Grid;