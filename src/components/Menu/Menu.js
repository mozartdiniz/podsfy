import React from 'react';

import MenuItem from './MenuItem/MenuItem';

import style from './Menu.css';

const menu = (props) => (
    <div className={style.Menu}>
        <div>Logo maybe</div>
        <MenuItem label="Profile" />
        <MenuItem label="Home" />
        <MenuItem label="Library" />
        <MenuItem label="Categories" />
    </div>
);

export default menu;
