import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, updatePost, scrollToBottom } from '../../actions/postsActions';
import MainSpinner from '../MainSpinner/MainSpinner';
import styles from './AddEditPage.module.scss';
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const AddEditPage = () => {
    const { id } = useParams();
    const history = useHistory();
    const { posts, loading, error } = useSelector((store) => store.posts);
    const [updatedPost, setUpdatedPost] = useState({});
    const [isSave, setIsSave] = useState(false);
    const dispatch = useDispatch();

    const titleHandler = (value) => {
        setUpdatedPost((state) => {
            return {
                ...state,
                title: value
            }
        });
    };

    const bodyHandler = (value) => {
        setUpdatedPost((state) => {
            return {
                ...state,
                body: value
            }
        });
    };

    const markHandler = (value) => {
        setUpdatedPost((state) => {
            return {
                ...state,
                isMark: value
            }
        });
    };

    const updateHandler = () => {
        dispatch(updatePost(id, updatedPost));
        setIsSave(true);
    };

    const saveHandler = () => {
        dispatch(addPost(updatedPost));
        dispatch(scrollToBottom(true));
        setIsSave(true);
    };

    useEffect(() => {
        dispatch(scrollToBottom(false));
        if (id) {
            const item = posts.find((post) => +post.id === +id);
            item && item.isMark ? item.isMark = true : item.isMark = false;
            setUpdatedPost(item);
        }
    }, []);

    useEffect(() => {
        if (isSave && !loading && !error) history.push('/');
    }, [loading, error, isSave]);

    return (
        <div className="container">
            {loading && <MainSpinner />}
            {!loading && !error && (
                <div className={`wrapper ${styles.wrapper}`}>
                    <div className={styles.inputContainer}>
                        <p className={styles.title}>Post title: </p>
                        <input
                            className={`${styles.input} ${styles.inputTitle}`}
                            type="text"
                            defaultValue={updatedPost ? updatedPost.title : ''}
                            onChange={(event) => titleHandler(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <p className={styles.body}>Post body: </p>
                        <input
                            className={`${styles.input} ${styles.inputBody}`}
                            type="text"
                            defaultValue={updatedPost ? updatedPost.body : ''}
                            onChange={(event) => bodyHandler(event.target.value)}
                        />
                    </div>
                    <label className="containerCheckbox">Add to favorite
                        <input
                            type="checkbox"
                            checked={!!updatedPost.isMark}
                            onChange={(event) => markHandler(event.target.checked)}
                        />
                        <span className="checkmark"/>
                    </label>
                    <div className={styles.navBar}>
                        <Link to="/">
                            <button type="button" className="btn">Cancel</button>
                        </Link>
                        <button
                            type="button"
                            className="btn"
                            onClick={id ? updateHandler : saveHandler}
                        >
                            {id ? 'update' : 'save'}
                        </button>
                    </div>
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

export default AddEditPage;