podemon app

//here we need to use a call back function, because it
        //is async, and then is overwritting the pokemon before.
        //IF YOU NEED TO CALL A ASYNC MULTIPLE TIMES,
        //use the call back, then it will keep the previous


- Parent component app
    - State: pokemon (const [pokemons, setPokemons] = useState([]))
    - State: search (const [search, setSearch] = useState(""))
    - function for fetch the pokemons  
        - make sure to parse (change from string to object)
        the data
    - Optional hadcode url or store in variable

        - Button to call the function
        - useEffect -> 
            useEffect(()=>{

            },[])

        - function
    RENDERS
    -  Cards component: user loads app and it shows 10 pokemon cards
        - dumb component because it does have the state
        - props =>  pokemons
    -  Input component: Search input  (that will filter cards) and Button