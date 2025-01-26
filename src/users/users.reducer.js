import { USERS_LIST_RECEIVED } from './users.actions';

const initialState = {
    usersList: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action) {
        case USERS_LIST_RECEIVED:
            return {
                ...state,
                usersList: state.payload.usersList,
            }

        default:
            return state;
    }
}

export default usersReducer;