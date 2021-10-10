import React from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    // When component is first rendered on screen, it will load up this library
    componentDidMount() {
        // The first arguement to define client, the second arguement to define call back function when the client is connected
        window.gapi.load('client:auth2', () => {
            // clientId is generated from Google Cloud API, scope what user's information you want in this App
            window.gapi.client.init({
                clientId: '313170209978-o6nnrp9occ6i8bnbfsmef771tm350rsi.apps.googleusercontent.com',
                scope: 'email'
                // gapi.client.init() will give a promise, use then() to automatically invoke a function after the library has initialize itself
            }).then(() => {
                // Current user's authentication status
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                // listen to the status when it changes
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                // No onClick={this.onSignOut()}, or this function will be called instantly when the component is rendered to the screen
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
    mapStateToProps,
    { signIn, signOut }
)(GoogleAuth);