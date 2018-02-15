import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <form className='term-search' onSubmit={this.goToTerm}>
                <h2>Glo Get It</h2>
                <input type='text' required placeholder='Search' defaultValue='' ref={(input) => { this.productInput = input }} />
                <button type='submit'>Go!</button>
            </form>
        )
    }
}

export default SearchBox;