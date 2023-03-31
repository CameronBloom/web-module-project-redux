export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// no payload required for toggle
export const toggleFavorites = ()=> {
    return({ type: TOGGLE_FAVORITES });
}

// payload is the movie argument
export const addFavorite = (movie)=> {
    return({ type: ADD_FAVORITE, payload: movie });
}

// payload is the id argument
export const removeFavorite = (id)=> {
    return({ type: REMOVE_FAVORITE, payload: id });
}