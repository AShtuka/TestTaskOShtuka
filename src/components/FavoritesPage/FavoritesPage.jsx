import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Post from '../Post/Post';
import MainSpinner from '../MainSpinner/MainSpinner';
import styles from './FavoritesPage.module.scss'
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const FavoritesPage = () => {
    const {posts, loading, error } = useSelector((store) => store.posts);
    const favoritesList = posts.length ? posts.filter((post) => post.isMark) : [];
    return (
        <div className="container">
            {loading && <MainSpinner/>}
            {!loading && !error && (
                <div className={`wrapper ${styles.wrapper}`}>
                    {!favoritesList.length && <h1 className={styles.title}>There are no posts in this list!</h1>}
                    {favoritesList.length ? (
                        <ul className="postList">
                            {favoritesList.map((item) => {
                                return <Post key={item.id} item={item}/>
                            })}
                        </ul>
                    ) : null}
                    <Link className={styles.btnContainer} to="/">
                        <button type="button" className="btn">Back to main page</button>
                    </Link>
                </div>
            )}
            {error && (
                <>
                    <MainSpinner />
                    <ErrorIndicator />
                </>
            )}
        </div>
    )
}

export default FavoritesPage;