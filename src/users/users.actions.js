import { fetchUsersList } from '../usersGateway';

export const USERS_LIST_RECEIVED = 'USERS_LIST_RECEIVED';

export const usersListReceived = usersList => {
    const action = {
        payload: { usersList },
        type: USERS_LIST_RECEIVED
    }

    return action;
}

export const getUsersList = () => {
    const thunkAction = function (dispatch) {
        fetchUsersList()
            .then(usersList => dispatch(usersListReceived(usersList)))
    }
    return thunkAction;
}