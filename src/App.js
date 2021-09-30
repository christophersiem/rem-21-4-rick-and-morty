import './App.css';
import Header from "./components/Header";
import characterResponse from "./characters.json"
import CharacterGallery from "./components/CharacterGallery";
import {useState} from "react";

function App() {


    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState("")

    const handleButtonClick = () => {
        setCharacters(characterResponse.results)
    }

    const handleClear = () => {
        setCharacters([])
    }

    const handleSearch = event => {
        const newSearch = event.target.value
        setSearch(newSearch)
    }

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <Header title="Rick & Morty App"/>
            <button onClick={handleButtonClick} >Load Characters</button>
            <button onClick={handleClear} >Clear Characters</button>
            <input type="text" onChange={handleSearch} value={search} />
            <CharacterGallery characters={filteredCharacters}/>
        </div>
    );
}

export default App;
