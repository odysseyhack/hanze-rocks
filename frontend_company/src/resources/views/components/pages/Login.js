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

    onSubmit = () => {
        this.props.login(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.username} onChange={this.handleChange}/>
                    <input type="password" value={this.state.password} onChange={this.handleChange} />
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