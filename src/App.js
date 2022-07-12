import './App.css';
import Cards from './Components/Cards/Cards';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';


function App() {
  const [pokemons, setPokemons] = useState([]);
  //const [searchedPoke, setSearchedPoke] = useState("");
  //const [search, setSearch] = useState("")

    useEffect(() => {
      async function getPokemon (id){
        console.log("id", id)
        let response = await fetch (`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`);
        let data = await response.json()
        console.log("all data",data)
        //console.log("id1 name",data.pokemon[2])
       // let evolutions = [] 
        // let types = []
        // for(let i = 0; i < 5; i++){
        //   const type = data.pokemon[`${id}`].type[i];
        //   //const nextEvolution = data.pokemon[`${id}`].next_evolution[i];
        //   //console.log("evoluions", nextEvolution)
        //    if(type !== null ){
        //    types.push(type);
        //    console.log("type", type)}
        //   // evolutions.push(nextEvolution);}
        // }

        const newPokemon = {
          id: data.pokemon[`${id}`].id,
          num: data.pokemon[`${id}`].num,
          name: data.pokemon[`${id}`].name,
          image: data.pokemon[`${id}`].img,
          type: data.pokemon[`${id}`].type[0],
          type2: data.pokemon[`${id}`].type[1],
          //evolutions: evolutions
          
        };  
        //console.log("type", data.pokemon[`${id}`].type[0])
        setPokemons((prev)=> [...prev, newPokemon]);
      };
      
      for (let i =0; i< 151; i++){
        getPokemon(i);
      }
    }, [])
console.log("data from effect", pokemons)

  return (
    <div className="App">
    <Header pokemons={pokemons}/>
    <Cards pokemons={pokemons}/>
    </div>
  );
}

export default App;
