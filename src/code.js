import Pokemon from "/src/pokemon.js";

Vue.createApp({
    components: {
        Pokemon
    },
    computed: {
        pokemonToRender()
        {
            const filteredByName = this.pokemons.filter( (poke) => poke.name.indexOf(this.nameFilter) > -1);

            if(this.favFilter)
            {
                    return filteredByName.filter( (poke) => poke.fav)
            }
            
            else return filteredByName;
        }
    },
    data() 
    {
        return {
            message: "Hello Vue!",
            pokemons: pokemonData,
            favFilter: false,
            nameFilter: ""
        }
    }
}).mount('#app')