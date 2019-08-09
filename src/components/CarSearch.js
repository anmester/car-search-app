import React from 'react';

export default class CarSearch extends React.Component {
    
    render() {
        return (
            <form onSubmit={(event) => this.props.onSearchChange(event)}>
                <label>Search for Hondas:
                    <input type="text" name="search"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}