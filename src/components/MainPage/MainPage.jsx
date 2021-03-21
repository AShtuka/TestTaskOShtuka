import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions/postsActions';
import MainSpinner from '../MainSpinner/MainSpinner';
import Post from '../Post/Post';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import styles from './MainPage.module.scss';

const MainPage = () => {
    const { posts, loading, error, scrollToBottom } = useSelector((store) => store.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts.length) dispatch(fetchPosts());
    }, []);

    useEffect(() => {
        if (scrollToBottom) window.scrollTo(0, document.body.scrollHeight);
    }, [scrollToBottom]);

    return (
        <div className="container">
            {loading && <MainSpinner />}
            {!loading && !error && (
                <div className="wrapper">
                    <ul className="postList">
                        {posts.map((item) => {
                            return <Post key={item.id} item={item} />
                        })}
                    </ul>
                    <div className={styles.navBar}>
                        <div className={styles.btnBlock}>
                            <Link to="/add">
                                <button type="button" className={styles.btn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         viewBox="0 0 172 172"
                                         className={styles.icon}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM82.56,44.72v37.84h-37.84v6.88h37.84v37.84h6.88v-37.84h37.84v-6.88h-37.84v-37.84z"></path></g></g></svg>
                                </button>
                            </Link>
                            <Link to="/favorites">
                                <button type="button" className={styles.btn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         viewBox="0 0 172 172"
                                         className={styles.icon}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M44.72,6.88c-1.90232,0 -3.44,1.54112 -3.44,3.44v151.36c0,1.23152 0.65688,2.3708 1.72672,2.98313c1.06984,0.61232 2.38376,0.60576 3.44672,-0.01344l39.54656,-23.06547l39.54656,23.06547c0.5332,0.31304 1.13488,0.47031 1.73344,0.47031c0.59168,0 1.18352,-0.15072 1.71328,-0.45687c1.06984,-0.61232 1.72672,-1.75161 1.72672,-2.98313v-47.58219l-6.88,4.40078v37.195l-36.10656,-21.06328c-0.5332,-0.31304 -1.13488,-0.47031 -1.73344,-0.47031c-0.59856,0 -1.20024,0.15727 -1.73344,0.47031l-36.10656,21.06328v-141.9336h75.68v31.66547l1.18922,-3.1175l1.04141,-1.0414c0.7568,-0.7568 2.40977,-2.17032 4.65609,-3.02344v-27.92313c0,-1.89888 -1.53768,-3.44 -3.44,-3.44zM134.375,44.41094c-1.376,0 -2.752,1.032 -3.44,1.72l-8.25735,21.67469l-23.04531,1.37734c-1.376,0 -2.75335,1.02931 -3.09735,2.40531c-0.344,1.376 0.00135,3.09465 1.37735,3.78265l17.54265,14.45203l-5.85203,22.36c-0.344,1.376 0.34535,3.09465 1.37735,3.78266c0.688,0.344 1.37465,0.68531 2.06265,0.68531c0.69144,0 1.38482,-0.34131 2.06938,-0.68531l19.26265,-12.38266l19.26265,12.72531c1.032,1.032 2.75066,0.688 3.78266,0c1.376,-1.032 1.72134,-2.40666 1.37734,-3.78265l-5.84531,-22.36l17.88531,-14.44531c1.032,-1.032 1.37869,-2.41338 1.03469,-3.78938c-0.344,-1.376 -1.72135,-2.40531 -3.09735,-2.40531l-23.05203,-1.37735l-8.25062,-21.66797c-0.344,-1.032 -1.72135,-2.06938 -3.09735,-2.06938zM134.375,57.48563l5.50265,15.48c0.688,1.032 1.72135,2.06265 3.09735,2.06265l16.51469,1.03469l-12.73203,10.32c-1.032,0.688 -1.37197,2.064 -1.02797,3.44l4.12531,15.82266l-13.76,-8.94266c-0.344,-0.344 -1.032,-0.69203 -1.72,-0.69203c-0.69144,0 -1.37465,0.34938 -2.06265,0.34938l-13.76,8.94265l4.12531,-15.82265c0.344,-1.032 0.00403,-2.752 -1.02797,-3.44l-12.73203,-10.32l16.51469,-0.69203c1.376,-0.344 2.40934,-1.02931 3.09734,-2.40531z"></path></g></g></svg>
                                </button>
                            </Link>
                        </div>
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

export default MainPage;