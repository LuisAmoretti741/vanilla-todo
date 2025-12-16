function getAllTodos() {
    const apiUrl = "https://69411c19686bc3ca8165a7da.mockapi.io/api/v1/todos";

    return fetch(apiUrl)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('Aiuuuuutooooo!!!', error));
}

function getTodo(id) {
    const apiUrl = "https://69411c19686bc3ca8165a7da.mockapi.io/api/v1/todos/" + id;

    return fetch(apiUrl)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('Aiuuuuutooooo!!!', error));
}