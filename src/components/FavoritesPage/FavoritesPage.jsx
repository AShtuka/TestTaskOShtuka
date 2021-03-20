import React from 'react';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
    return (
        <div>
            <h1>Hello from favorites page!</h1>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
        )
}

export default FavoritesPage;