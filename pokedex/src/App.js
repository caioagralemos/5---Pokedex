import './App.css';
// import {Pokedex} from './Pokedex'
import { Pokegame } from './Pokegame';

function App() {
  return (
    <div className="App">
      <h1><img src='https://freepngimg.com/save/37466-pokeball-image/30x30' alt='pokeball' style={{width:35}}/>React Pokédex</h1>
      <Pokegame/>
    </div>
  );
}

export default App;
