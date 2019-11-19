// getting id through props-match-params
export const fetchPicture = id => (
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
)