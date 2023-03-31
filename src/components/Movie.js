import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

// import our connect function
import { connect } from 'react-redux';

// import our action (automatically wrapped in dispatch)
import { deleteMovie } from '../actions/movieActions';
import { addFavorite, removeFavorite } from '../actions/favoritesActions';

// initialize our state to props
const mapStateToProps = (state) => {
    return ({
        movies: state.movieReducer.movies,
        displayFavorites: state.favoriteReducer.boolDisplay
    })
}

const Movie = (props) => {
    // pull in state values and functions from our connect function
    const { movies, displayFavorites, deleteMovie, addFavorite, removeFavorite } = props;
    const { id } = useParams();
    const { push } = useHistory();

    const movie = movies.find(movie => movie.id === Number(id));
    
    const handleDeleteMovie = () => {
        // remove movie from favorites list if deleted...
        removeFavorite(movie.id);
        // deleteMovie needs an id value
        deleteMovie(movie.id);
        // redirect after delete via the destructured 'push' from useHistory
        push("/movies")
    }

    const handleAddFavorite = () => {
        console.log(`made it here...`)
        addFavorite(movie);
    }

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">
                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            { displayFavorites && <span onClick={handleAddFavorite} className="m-2 btn btn-dark">Favorite</span> }                            
                            <span className="delete" onClick={handleDeleteMovie}><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default connect(mapStateToProps, { deleteMovie, addFavorite, removeFavorite })(Movie);