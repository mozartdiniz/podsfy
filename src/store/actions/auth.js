import * as actionTypes from './actionTypes';
import firebase from 'firebase';

import { throwError } from './errorHandler';

export const userIsAuthenticated = (uid) => {
    return {
        type: actionTypes.USER_IS_AUTHENTICATED,
        uid,
    };
};

export const storeUser = (email, uid) => {
    return {
        type: actionTypes.STORE_USER,
        email,
        uid,
    };
}

export const createUser = (email, password) => {
    return (dispatch) => {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
            email, password
        ).then((response) => {
            const {email, uid} = response.user;

            dispatch(storeUser(email, uid));
        }).catch((error) => {
            dispatch(throwError(error.code, error.message));
        });
    }
};

export const checkIfIsAuthenticated = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                return;
            }

            dispatch(userIsAuthenticated(user.uid));
        });
    }
}

export const loginUser = (email, password) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
            dispatch(userIsAuthenticated(response.uid));
        }).catch((error) => {
            if (error.code === 'auth/user-not-found') {
                dispatch(createUser(email, password));
            } else {
                dispatch(throwError(error.code, error.message));
            }
        });
    }
};

export const logoutUser = () => {
    return (dispatch) => {
        firebase.auth().signOut().then(() => {
            dispatch(userIsAuthenticated());
        }).catch((error) => {
            dispatch(throwError(error.code, error.message));
        });
    }
};
