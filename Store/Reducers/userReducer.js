const initialState = {
    user : []
}

function profil(state = initialState, action){

    let nextState

    switch (action.type) {
        case "user_add": // inscription ou connexion
            nextState ={ 
                user : [action.value] 
            }
            /* Copie du state actuelle puis ajout de la nouvelle valeur (information de l'utilisateur) */
            return nextState || state
        case "user_disconnect":
            nextState = {
                user : []
            }
            return nextState
        default:
            return state
    }
}


export default profil