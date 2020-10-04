 export function getDatasFromApi(entity, method, params=null){
    const urlget = "https://127.0.0.1:8000/apip"
    //const urlpost="https://127.0.0.1:8000/api_symfony"
    if (params == null ){
        if(method == "get"){
            return fetch(urlget+"/"+entity, { method : "GET", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}})
                .then(response => response.json())
                .catch(error => console.log("Une erreur est survenue lors de la recupération des données"))
        }else{
            console.log("Operation non disponible sur l'api")
        }
    }else{
        if(method == "get"){
            return fetch(urlget+"/"+entity+"/"+params, { method : "GET", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}})
                .then(response => response.json())
                .catch(error => console.log("Une erreur est survenue lors de la recupération des données"))
        }else if(method == "post"){
            
        return fetch(url+"/"+entity,{method : "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},body : JSON.stringify(params)})
                .then(response => response.json())
                .catch(response => response.json())
        }
        else{
            console.log("Operation non disponible sur l'api")
        }
    }
    // const url = "https://127.0.0.1:8000/api/posts"
    // //const url2 = "https://api.themoviedb.org/3/search/movie?api_key=92a473960936815c3092c367cb341c81&language=fr&query=avengers&page=1"
    // return fetch(url, { method : "GET", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}})
    //     .then((response) => response.json())
    //     .catch((error) => console.log("Vous tous vos mercon ça ne passe pas " + error))

} 


