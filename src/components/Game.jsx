import React, { useState } from 'react'

const Game = ({array, setGame, index}) => {
    const [valueOfInput, setValueOfInput] = useState("");
    const [chyby, setChyby] = useState([]);
    const [check, setCheck] = useState(true);
    const [zhodnoceni, setZhodnoceni] = useState(false);

    const tryIfInclude = (e) => {
        const veta = array[index].sentence;
        if (veta.includes(e.target.value) && veta[0] === e.target.value[0]) {
            setValueOfInput(e.target.value)
            setCheck(true);
            if (veta.length === e.target.value.length) {
                setZhodnoceni(true);
            }
        } else if (check) {
            setChyby((oldValue) => [...oldValue, e.target.value.length - 1]);
            setCheck(false);
        }
    }
    return (
        <> 
            <button className="backBtn" onClick={() => setGame(false)}>back</button>
            {
                zhodnoceni 
                ? 
                (
                    <>
                        <p>chybovost: {Math.round(100*chyby.length/array[index].sentence.length)}%</p>
                        <p>znamka: {Math.round((((100*chyby.length/array[index].sentence.length) /11) + 1) > 5 ? "5" : (((100*chyby.length/array[index].sentence.length) /11) + 1))}</p>
                    </>
                )
                :
                (
                    <>
                        <input className="inputText" type="text" value={valueOfInput} onChange={tryIfInclude} placeholder="type here"/>
                        <div className="sentence">
                            {array[index].sentence.split('').map((char, index) => {
                                return (
                                    <span className={`char ${chyby.includes(index) ? "red" : index < valueOfInput.length && "green" }`}>{char}</span>
                                )
                            })}
                        </div>
                        <p className="error">chyby: {chyby.length}</p>
                    </>
                )
            }
            
        </>
    )
}

export default Game

