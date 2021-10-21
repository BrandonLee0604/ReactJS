import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
    // Hook a context cobject to a component, attention: must use exactly 'contextType' as the reference name
    // It sets a property directly to the component itself, that is <Button />
    // static contextType = LanguageContext;

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return (
            <button className="ui button primary" >
            <LanguageContext.Consumer>
            {/* value is the context object in context system */}
            {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
            </LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button;