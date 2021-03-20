import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../../actions/langActions';
import styles from './test.scss';

const Test = () => {
    const { lang } = useSelector((store) => store.lang);
    const dispatch = useDispatch();
    return (
        <div className={styles.test}>
            <h1>Hello there!</h1>
            <p>{lang}</p>
            <button onClick={() => dispatch(setLang('ru'))}>RU</button>
            <button onClick={() => dispatch(setLang('uk'))}>UK</button>
        </div>
    )
}

export default Test;