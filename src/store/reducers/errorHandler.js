import * as actionTypes from '../actions/actionTypes';
import uuid from 'uuid/v4';

const initialState = {
    errorList: [],
}

const saveErrorMessage = (state, action) => {
    const { code, message } = action;
    const errorList = [].concat(state.errorList);

    errorList.push({
        id: uuid(),
        code,
        message,
    });

    return {
        ...state,
        errorList,
    }
}

const dismissErrorMessages = (state, action) => ({
    ...state,
    errorList: [],
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.THROW_ERROR: return saveErrorMessage(state, action);
        case actionTypes.DISMISS_ERROR: return dismissErrorMessages(state, action);
        default: return state;
    }
}

export default reducer;
