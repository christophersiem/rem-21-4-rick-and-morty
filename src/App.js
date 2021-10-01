import './App.css';
import Header from "./components/Header";
import CharacterGallery from "./components/CharacterGallery";
import {useEffect, useState} from "react";
import {fetchCharacters} from "./services/rick-and-morty-api-service";

function App() {
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState("")
    const [nextPageUrl, setNextPageUrl] = useState();
    const [previousPageUrl, setPreviousPageUrl] = useState();
    const startUrl = "https://rickandmortyapi.com/api/character"

    const getCharactersFromApi = (url) => {
        fetchCharacters(url)
            .then(response => {
                setNextPageUrl(response.info.next)
                setPreviousPageUrl(response.info.prev)
                setCharacters(response.results)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getCharactersFromApi(startUrl)
    }, [])


    const handleSearch = event => {
        const newSearch = event.target.value
        setSearch(newSearch)
    }

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(search.toLowerCase())
    )

    const handlePreviousPage = () => {
        if (previousPageUrl !== null) {
            getCharactersFromApi(previousPageUrl)
        }
    }

    const handleNextPage = () => {
        if (nextPageUrl !== null) {
            getCharactersFromApi(nextPageUrl)
        }
    }

    return (
        <div>
            <Header title="Rick & Morty App"/>
            <button
                onClick={handlePreviousPage}
                disabled={previousPageUrl === null}
            >Previous Page
            </button>
            <button
                onClick={handleNextPage}
                disabled={nextPageUrl === null}
            >Next Page
            </button>
            <input
                type="text"
                onChange={handleSearch}
                value={search}/>
            {characters.length === 0 ?
                <p>No characters found</p> :
                <CharacterGallery characters={filteredCharacters}/>}
        </div>
    );
}

export default App;
