import React from 'react';

import MenuItem from './MenuItem/MenuItem';

const menu = (props) => (
    <div>
        <div>Logo maybe</div>
        <MenuItem label="Profile" />
        <MenuItem label="Home" />
        <MenuItem label="Library" />
        <MenuItem label="Categories" />
    </div>
);

export default menu;
