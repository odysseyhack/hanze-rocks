import React, {Component} from 'react';
import {connect} from "react-redux";

class PageLayout extends Component {
    render() {
        return (
            <div className="App">
                <h1>{this.props.session.user.name}</h1>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        session: state.session
    }
}

export default connect(mapStateToProps, null)(PageLayout);