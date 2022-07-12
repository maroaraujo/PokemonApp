import React, { useState } from 'react'

function SearchBox() {
    const [text, setText] = useState("")

    function handleChange(e){
        setText(e.target.value)
    }
    console.log("this is the new text ",text)

    function handleClick(){
        if(text.toLowerCase() === pokemons.name.toLowerCase()){
        }
    }
  return (
    <div>
    <input className='searchbox' type="text" onChange={handleChange} value={text} />
    <button onClick={handleClick}>Search Pokemon</button>
    </div>
  )
}

export default SearchBox