import './App.css';
import Header from "./components/Header";
import characterResponse from "./characters.json"
import CharacterGallery from "./components/CharacterGallery";
import {useState} from "react";

function App() {


    const [characters, setCharacters] = useState([])

    const handleButtonClick = () => {
        setCharacters(characterResponse.results)
    }

    return (
        <div>
            <Header title="Rick & Morty App"/>
            <button onClick={handleButtonClick} >Load Characters</button>
            <CharacterGallery characters={characters} />

        </div>
    );
}

export default App;
