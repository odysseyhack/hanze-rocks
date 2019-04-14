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
        // const style = {
        //     backgroundColor : 'black',
        //     padding: '8px',
        // }

        return (
                <header className="App-header">
                    {/* <h1>DirectInfo</h1> */}
                    <h2>Emergency Service Login</h2>
                    <form onSubmit={this.onSubmit}>
                        <label>username </label>
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                        <br/>
                        <label>password </label>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        <br/>
                        <button className="App-button" type="submit">Inloggen</button>
                    </form>
                </header>
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