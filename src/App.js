import './App.css';
import Header from "./components/Header";
import characterResponse from "./characters.json"
import CharacterCard from "./components/CharacterCard";

function App() {

    const characters = characterResponse.results

    return (
        <div>
            <Header title="Rick & Morty App"/>
            <CharacterCard character={characters[0]} />
            <CharacterCard character={characters[1]} />
        </div>
    );
}

export default App;
