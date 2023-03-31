import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { toggleFavorites } from '../actions/favoritesActions';

const mapStateToProps = (state) => {
    return ({
        appTitle: state.movieReducer.appTitle,
        displayFavorites: state.favoriteReducer.boolDisplay
    })
}

const MovieHeader = (props) => {
    const { appTitle, displayFavorites, toggleFavorites } = props;
    // const displayFavorites = true;

    // always try to make a separate handler function
    const handleToggleFavorites = () => {
        toggleFavorites();
    }
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary" onClick={ handleToggleFavorites }><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

export default connect(mapStateToProps, { toggleFavorites })(MovieHeader);