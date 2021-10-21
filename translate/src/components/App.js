import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = (language) => {
        this.setState({ language });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
                </div>
                {/* Get value from state to the pipe, and when the state changed will cause a re-render */}
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
                
                {/* Get a fixed value to the pipe */}
                <LanguageContext.Provider value="english">
                    <UserCreate />
                </LanguageContext.Provider>
                
                {/* Only get the defualt value */}
                <UserCreate />
            </div>
        );
    }
}

export default App;