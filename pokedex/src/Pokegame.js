import React, { Component } from 'react'
import { Pokedex } from './Pokedex'

class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
            {id: 1, name: 'Bulbasário', type: 'Planta', base_experience: 62},
            {id: 6, name: 'Charizard', type: 'Fogo', base_experience: 162},
            {id: 8, name: 'Wartortle', type: 'Água', base_experience: 91},
            {id: 25, name: 'Pikachu', type: 'Elétrico', base_experience: 112},
            {id: 94, name: 'Gengar', type: 'Veneno', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'Normal', base_experience: 65},
            {id: 143, name: 'Snorlax', type: 'Normal', base_experience: 165},
            {id: 151, name: 'Mew', type: 'Psíquico', base_experience: 250}
          ]
    }
    render() {
        let hand1 = []
        let hand2 = [...this.props.pokemon]
        while(hand1.length < hand2.length){
            let randId = Math.floor(Math.random() * hand2.length)
            let randPokemon = hand2.splice(randId, 1)[0]
            hand1.push(randPokemon)
        }
        // console.log("mao 1")
        // console.log(hand1)
        // console.log("mao 2")
        // console.log(hand2)
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
        return(
            <div>
                <h3>Time 1</h3>
                <Pokedex pokemon={hand1} xp={exp1} isWinner={exp1 > exp2} />
                <h3>Time 2</h3>
                <Pokedex pokemon={hand2} xp={exp2} isWinner={exp2 > exp1} />
            </div>
        )
    }
}

export {Pokegame}