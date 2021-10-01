import './App.css';
import Header from "./components/Header";
import CharacterGallery from "./components/CharacterGallery";
import {useEffect, useState} from "react";
import {fetchCharacters} from "./services/rick-and-morty-api-service";

function App() {
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(0)

    useEffect( () =>  {
        fetchCharacters(page)
            .then(characters => setCharacters(characters))
            .catch(error => console.log(error))
    }, [page])

    const handleSearch = event => {
        const newSearch = event.target.value
        setSearch(newSearch)
    }

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(search.toLowerCase())
    )

    function handlePreviousPage(){
        setPage(page-1)
    }

    function handleNextPage(){
        setPage(page+1)
    }

    return (
        <div>
            <Header title="Rick & Morty App"/>
            <button onClick={handlePreviousPage}>previous</button>
            <button onClick={handleNextPage}>next</button>

            <input type="text" onChange={handleSearch} value={search} />
            <CharacterGallery characters={filteredCharacters}/>
        </div>
    );
}

export default App;
