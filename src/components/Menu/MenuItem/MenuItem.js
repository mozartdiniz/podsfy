import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MenuItem.css';

const menuItem = (props) => (
    <NavLink
        to={props.link}
        className={styles.MenuItem}>
        {/* Icons for menu items */}
        {/* <div>Icon</div> */}
        <div>{ props.label }</div>

    </NavLink>
);

export default menuItem;
