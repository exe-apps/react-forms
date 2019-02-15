import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Forms extends Component { 

    render() {
    
        return (
            <Fragment>
                <form>
                    Name: <br/> <input type="text" name="name" placeholder="Name" onChange={this.props.handleChangeInfo} /><br/>
                    Age: <br/> <input type="text" name="age" placeholder="Age" onChange={this.props.handleChangeInfo} /><br/>
                    Occupation: <br/> <input type="text" name="occupation" placeholder="Occupation" onChange={this.props.handleChangeInfo} /><br/>
                    <br/>
                    <button type="button" onClick={this.props.handleAddUser}>Add</button>
                </form>
            </Fragment>
        );
    }
}

Forms.propTypes = {
    handleChangeInfo: PropTypes.func,
    handleAddUser: PropTypes.func
}

export {
    Forms
}

