import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userIsAuthenticated: false,
    email: '',
    uid: '',
};

const userIsAuthenticated = (state, action) => ({
    ...state,
    uid: action.uid,
    userIsAuthenticated: (action.uid) ? true : false,
});

const storeUser = (state, action) => ({
    ...state,
    email: action.email,
    uid: action.uid,
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_IS_AUTHENTICATED: return userIsAuthenticated(state, action);
        case actionTypes.STORE_USER: return storeUser(state, action);
        default: return state;
    }
}

export default reducer;
