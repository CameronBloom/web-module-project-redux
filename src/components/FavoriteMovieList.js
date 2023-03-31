import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { removeFavorite } from '../actions/favoritesActions';


const mapStateToProps = (state) => {
    return ({
        favorites: state.favoriteReducer.arrFavorites,
        display: state.favoriteReducer.boolDisplay
    })
}

const FavoriteMovieList = (props) => {
    // destructure props
    const { favorites, display, removeFavorite } = props

    // how do we get the id???
    const handleRemoveFavorite = () => {
        return null
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={handleRemoveFavorite}><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);