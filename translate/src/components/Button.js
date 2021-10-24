import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
    // Hook a context cobject to a component, attention: must use exactly 'contextType' as the reference name
    // It sets a property directly to the component itself, that is <Button />
    // static contextType = LanguageContext;

    renderSubmit(languaege) {
        return languaege === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {/* value is the context object in context system */}
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button >
        );
    }

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;