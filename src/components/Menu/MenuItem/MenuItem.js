import React from 'react';

const menuItem = (props) => (
    <div onClick={ props.menuAction }>
        <div>Icon</div>
        <div>{ props.label }</div>
    </div>
);

export default menuItem;
