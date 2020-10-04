export function getUserFromApi(id){
    const url = "https://127.0.0.1:8000/api/users/"+id
    return fetch(url, { method : "GET", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}})
        .then((response) => response.json())
        .catch((error) => console.log("Vous tous vos mercon ça ne passe pas " + error))
}