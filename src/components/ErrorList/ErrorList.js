import React from 'react'

import ErrorMessage from './ErrorMessage/ErrorMessage';

import style from './ErrorList.css';

const ErrorList = (props) =>
    <div className={style.ErrorList} >
        {
            props.errors.map((error) =>
                <ErrorMessage code={error.code} message={error.message} key={error.id} />
            )
        }
    </div>

export default ErrorList;
