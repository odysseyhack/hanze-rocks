import React, {Component} from 'react';
import {connect} from "react-redux";
import AuthAction from "../../../../app/actions/AuthAction";

class Login extends Component {

    state = {
        username: "",
        password: "",
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.login(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                    <button type="submit">Inloggen</button>
                </form>

            </div>
        );
    }
}

function mapDispatchToProps() {
    const authAction = AuthAction.getInstance();

    return {
        login: data => dispatch => {
            authAction.login(dispatch, data);
        }
    }
}

export default connect(null, mapDispatchToProps())(Login);