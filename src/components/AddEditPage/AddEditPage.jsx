import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AddEditPage = () => {
    let { id } = useParams();
    return (
        <div>
            <h1>Hello from Add/Edit page!</h1>
            {id && <p>{id}</p>}
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
        )
}

export default AddEditPage;