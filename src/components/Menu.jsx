import React, { useState } from 'react'

const Menu = ({array, setGame, setIndex}) => {
    const [search, setSearch] = useState("");
    return (
        <>
            <input type="text" className="inputText" style={{marginBottom: "6px"}} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search..."/>
            {
                array.filter((veta) => veta.sentence.toLowerCase().includes(search.toLowerCase()) ).map(veta => {
                    return (
                        <div className="vetaClickable" onClick={() => {
                            setGame(true);
                            setIndex(veta.id);
                        }}>{veta.sentence}</div>
                    )
                })
            }   
        </>
    )
}

export default Menu
