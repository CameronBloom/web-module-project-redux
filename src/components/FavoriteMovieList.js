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
    const { favorites, removeFavorite } = props

    // how do we get the id???
    // use an anonymous function during our mapping function to pass the item's movie.id
    const handleRemoveFavorite = (passedId) => {
        console.log(passedId);
        removeFavorite(passedId);
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={() => {handleRemoveFavorite(movie.id)}}><span className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);