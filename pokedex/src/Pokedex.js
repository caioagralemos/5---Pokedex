import React, { Component } from 'react'
import { Pokecard } from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component {
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
        return (
            <div className='Pokedex'>
                <p>Total: {this.props.xp}</p>
                {this.props.isWinner === true ? <p className='Result-win'>Time vencedor!</p> : <p className='Result-lose'> Time perdedor</p>}
                {this.props.xp === 802 ? <p className='Trunfo'>EQUIPE TRUNFO!</p> : null}
                <div className='Pokedex-cards'>
                {this.props.pokemon.map((p) => (
                    <Pokecard
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    base_experience={p.base_experience}
                    />
                ))}
            </div>
            </div>
        )
    }
}

export { Pokedex }