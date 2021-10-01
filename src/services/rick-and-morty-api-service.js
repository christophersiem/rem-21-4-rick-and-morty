
export const fetchCharacters = (url) => {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Error while loading characters from Rick and Morty API!")
            }
        })
}
