import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Tables extends Component { 

    render() {
    
        return (
            <Fragment>
                <table className='user-table'>
                <thead>

                </thead>
                <tbody>
                    <tr className='user-table-row'>
                        <th className='user-table-cell'>NAME</th>
                        <th className='user-table-cell'>AGE</th>
                        <th className='user-table-cell'>OCCUPATION</th>
                        <th className='user-table-cell'></th>
                    </tr>
                    {
                        this.props.usersList.map((user, index) =>{
                            return (
                                <tr className='user-table-row'>
                                    <th className='user-table-cell'>{user.name}</th>
                                    <th className='user-table-cell'>{user.age}</th>
                                    <th className='user-table-cell'>{user.occupation}</th>
                                    <th className='user-table-cell'><button type='button' onClick={() => this.props.deleteUser(index)}>Delete User</button></th>
                                </tr>
                            )
                    })
                    }
                </tbody>
                </table>
            </Fragment>
        );
    }
}

Tables.propTypes = {
    deleteUser: PropTypes.func,
    usersList: PropTypes.func
}

export {
    Tables
}