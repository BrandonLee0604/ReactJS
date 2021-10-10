import React from "react";
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderError({ touched, error }) {
        //console.log(meta);
        // Only show error message when user has touched the input field
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label , meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        // console.log(formProps);
        // Take entire input object in to this <input>, such as value and EventHandler 
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues) {
        //event.preventDefault();
        console.log(formValues);
    }

    render() {
        return (
            // Use handleSubmit to call the call back function onSubmit to do what we wanna do in onSubmit, classNams show be "ui form error" so that errors can be shown up to the screen
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                {/* Need to define what to show in Field in 'component' arguement */}
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        // only ran if the sure did not enter a title
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        // only ran if the sure did not enter a title
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);