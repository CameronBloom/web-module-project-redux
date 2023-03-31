import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from './../actions/favoritesActions';

const initialState = {
  arrFavorites: [
    {title: "First Title", id: 0}, 
    {title: "Second Title", id: 1},
    {title: "Third Title", id: 2}
  ],
  boolDisplay: true,
}

const favoriteReducer = (state = initialState, action) => {
  switch(action.type) {
      case TOGGLE_FAVORITES:
        return {
          ...state,
          boolDisplay: !state.boolDisplay
        }
      case ADD_FAVORITE:
        console.log(`reducoooooooor`)
        // console.log(arrFavorites)
        console.log(action.payload)
        return {
          ...state,
          arrFavorites: [...state.arrFavorites, action.payload]
        }
      case REMOVE_FAVORITE:
        return {
          ...state,
          arrFavorites: state.arrFavorites.filter((movie) => movie.id !== action.payload)
        }
      default:
          return state;
  }
}

export default favoriteReducer;