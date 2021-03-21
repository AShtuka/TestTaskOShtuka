import React from 'react';
import styles from './ErrorIndicator.module.scss';

const ErrorIndicator = () => {
    return (
        <div className={styles.errorContainer}>
            <p className={styles.error}>Something went wrong....(</p>
            <a className={styles.link} href="https://ashtuka.github.io/TestTaskOShtuka/">Try again!</a>
        </div>
    )
}

export default ErrorIndicator;