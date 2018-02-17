import * as actionTypes from './actionTypes';

export const throwError = (message, code) => {
    return (dispatch) => {
        dispatch(saveErrorMessage(message, code));
        setTimeout(
            () => dispatch(dismissErrorMessages())
        , 3000);
    }
}

export const saveErrorMessage = (message, code) => ({
    type: actionTypes.THROW_ERROR,
    message,
    code,
});

export const dismissErrorMessages = () => ({
    type: actionTypes.DISMISS_ERROR,
});
