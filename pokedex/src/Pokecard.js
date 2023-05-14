import React, {Component} from 'react';
import './Pokecard.css'

function idfix (id) {
    if (id < 10) {
        return "00" + id
    } else if (id > 10 && id < 100) {
        return '0' + id
    } else {
        return id
    }
}   

class Pokecard extends Component {
    render() {
        const props = this.props
        const id = idfix(props.id)
        return (
            <a className='Pokecard' href={`https://www.pokemon.com/br/pokedex/${id}`}>
                <h3 className='Pkmn-name'>{props.name}</h3>
                <img className='Pkmn-img' alt={props.name} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}/>
                <p className='Pkmn-type'>Tipo: {props.type}</p>
                <p className='Pkmn-xp'>EXP: {props.base_experience}</p>
            </a>
        )
    }
}

export {Pokecard}