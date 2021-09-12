import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    // Use Arrow function to bind the this.onSubmit to 'this SearchBar', or use arrow function in <form />
    onFormSubmit = (event) => {
        // Prevent auto fresh when press 'Enter'
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</ label>
                        {/* Not using this.OnIputChange(), or it will call the function when it's rendered */}
                        <input type='text' 
                        value={this.state.term} 
                        onChange={(e) => this.setState({ term: e.target.value })} 
                        />
                    </ div>
                </form>
            </div>
        );
    }
}

export default SearchBar;