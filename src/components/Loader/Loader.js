import React from 'react';

import style from './Loader.css';

const Loader = (props) => {
    if (!props.show) {
        return null;
    }

    return <div className={style.Loader}></div>
}

export default Loader;
