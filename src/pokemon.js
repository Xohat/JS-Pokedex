export default {
    data() {
        return {
            count: 0
        }
    },
    props: {
        data: Object
    },
    methods:
    {
        setFav(){
            this.data.fav = !this.data.fav;
        }
    },
    template: `
    <li class="pokemonCard" v-on:click="setFav">
        {{ data.id }}: {{ data.name }}
        <span v-if="data.fav">fav</span>
        <div class="pokemonImage" v-bind:style="{ backgroundImage: 'url(' + data.sprites.front_default + ')' }"></div>
    </li>
    `



}