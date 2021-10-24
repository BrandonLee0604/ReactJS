import React from "react";


// Set default value to get information in context
//export default React.createContext('english');

// Must use a capital 'C'
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = { language: 'english' };

    onLanguageChange = (language) => {
        this.setState({ language });
    };

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
            {/* Let all children of this component wrapped with the Context.Provider */}
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;