import React from 'react';

import styles from './MenuItem.css';

const menuItem = (props) => (
    <div onClick={ props.menuAction } className={styles.MenuItem}>
        <div>Icon</div>
        <div>{ props.label }</div>
    </div>
);

export default menuItem;
