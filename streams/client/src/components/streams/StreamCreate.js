import React from "react";
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
    onSubmit = (formValues) => {
        //event.preventDefault();
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                {/* Reusable Component */}
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);