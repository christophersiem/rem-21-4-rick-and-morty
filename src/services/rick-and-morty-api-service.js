
export const fetchCharacters = (page) => {
    return fetch("https://rickandmortyapi.com/api/character/?page=" + page)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Error while loading characters from Rick and Morty API!")
            }
        })
        .then(page => page.results)
}
