import './App.css';
import Header from "./components/Header";
import CharacterGallery from "./components/CharacterGallery";
import {useEffect, useState} from "react";
import {fetchCharacters} from "./services/rick-and-morty-api-service";
import styled from "styled-components/macro";

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
            <Button
                primary
                onClick={handlePreviousPage}
                disabled={previousPageUrl === null}
            >Previous Page
            </Button>
            <Button
                onClick={handleNextPage}
                disabled={nextPageUrl === null}
            >Next Page
            </Button>
            <input
                type="text"
                onChange={handleSearch}
                value={search}/>
            <CharacterGallery characters={filteredCharacters}/>
        </div>
    );
}

export default App;

const Button = styled.button`
    background: ${props => props.primary ? "black" : "blue"};
`
