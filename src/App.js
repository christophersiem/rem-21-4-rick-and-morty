import './App.css';
import Header from "./components/Header";
import characterResponse from "./characters.json"
import CharacterGallery from "./components/CharacterGallery";

function App() {

    const characters = characterResponse.results

    return (
        <div>
            <Header title="Rick & Morty App"/>
            <CharacterGallery characters={characters} />

        </div>
    );
}

export default App;
