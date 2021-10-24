import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
            {/* Wrap all components in this LanguageStore */}
                <LanguageStore>
                    <LanguageSelector />

                    {/* Get value from state to the pipe, and when the state changed will cause a re-render */}
                    {/* Wrapped with two context object */}
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;