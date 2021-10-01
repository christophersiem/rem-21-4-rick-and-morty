
export const fetchCharacters = (page) => {
    return fetch("https://rickandmortyapi.com/api/character/?page=" + page)
        .then(response => response.json())
        .then(page => page.results)
}
