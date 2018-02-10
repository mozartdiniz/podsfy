import React from 'react';

import MenuItem from './MenuItem/MenuItem';

import style from './Menu.css';

const menu = (props) => (
    <div className={style.Menu}>
        <div>Logo maybe</div>
        <MenuItem label="Profile"    link="/"/>
        <MenuItem label="Home"       link="/"/>
        <MenuItem label="Library"    link="/"/>
        <MenuItem label="Categories" link="/"/>
    </div>
);

export default menu;
