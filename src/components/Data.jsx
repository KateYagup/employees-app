import React, { Component } from "react";
import { fetchUsersList } from "../usersGateway";
import { connect } from "react-redux";
import { getUsersList } from '../users/users.actions';
import { usersListSelector } from '../users/users.selectors';


const baseUrl = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';

class Data extends Component {
    // state = {
    //     users: [],
    // }

    // fetchUsers = () => {
    //     fetchUsersList()
    //         .then(tasksList => {
    //             this.setState({
    //                 users: tasksList,
    //             });
    //         })
    // }


    componentDidMount() {
        // this.fetchUsers();
        this.props.getUsersList();
    }

    render() {
        const names = this.props.users.map(user => (
            <div>{user.name}</div>
        ))

        return (
            <div>
                {names}
            </div>
        )
    }
}

const mapDispatch = {
    getUsersList: getUsersList,
};

const mapState = state => {
    return {
        users: usersListSelector(state),
    }
}

export default connect(mapState, mapDispatch)(Data);