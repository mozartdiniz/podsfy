import React from 'react';

import style from './ErrorMessage.css';

const ErrorMessage = (props) => <div className={style.ErrorMessage}>
    <span>{ props.code }</span>{ props.message }
</div>;

export default ErrorMessage;
