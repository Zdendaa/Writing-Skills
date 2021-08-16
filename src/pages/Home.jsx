import React, { useState } from 'react'
import Game from '../components/Game'
import Menu from '../components/Menu';

const Home = () => {
    const [game, setGame] = useState(false);
    const [index, setIndex] = useState();

    const array = [
        {id: 0, sentence: "df hf df hf df hf df hf"},
        {id: 1, sentence: "ahojky jak se máš. Volný je náš medvídek, bůh i velitel"},
        {id: 2, sentence: "Jako ovoce se označují zpravidla plody, souplodí, plodenství nebo semena převážně víceletých semenných rostlin, nejčastěji dřevin. Ovoce však není biologickým pojmem s přesným vymezením (které se navíc v různých jazycích liší)"},
        {id: 3, sentence: "Zelenina je souhrnný název pro jedlé a většinou pěstované (kulturní) rostliny nebo jejich části, jež tvoří velkou část lidské i živočišné stravy."},
        {id: 4, sentence: "Marvel Worldwide, Inc., dnes známé také jako Marvel Comics, je americké komiksové vydavatelství spadající pod společnost Marvel Entertainment, kterou od roku 2009 vlastní kolos The Walt Disney Company."},
    ]
    return (
        <div className="mainContainer">
            <div className="content">
                {
                    game ? <Game array={array} index={index} setGame={setGame} /> : <Menu array={array} setGame={setGame} setIndex={setIndex}/> 
                }
            </div>
            
        </div>
    )
}

export default Home
