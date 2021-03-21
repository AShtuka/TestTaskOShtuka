import React from 'react';
import logo from '../../assets/images/logo.svg';
import styles from './MainSpinner.module.scss';

const MainSpinner = () => (
    <div className={styles.spinnerContainer}>
        <img src={logo} className={styles.spinner} alt="logo" />
    </div>
)

export default MainSpinner;