import React from "react";
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    // Do not need to fetch userId in this component, it is done in action creator 
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }

    render() {
        //const user = this.props.users.find((user) => user.id === this.props.userId);
        const user = this.props.user;
        if (!user) {
            return null;
        }
        return <div className="header">{user.name}</div>;
    }
}

// use ownProps to refer the props that to be sent into the component
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);