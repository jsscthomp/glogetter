import React from 'react';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {
    constructor() {
        super();
        this.goToProduct = this.goToProduct.bind(this);
    }

    goToProduct(event) {
        event.preventDefault();
        console.log("you've searched for a product");
        //grab text from search box
        const productId = this.productInput.value;
        console.log(`Going to ${productId} page`);
        //transition from/to /product/:productId
        this.props.history.push(`/product/${productId}`);
    }

    render() {
        return (
            <form className='product-search' onSubmit={this.goToProduct}>
                <h2>Glo Get It...</h2>
                <input type='text' required placeholder='Search' defaultValue='' ref={(input) => { this.productInput = input }} />
                <button type='submit'>Go!</button>
            </form>
        )
    }
}

SearchBox.contextTypes = {
    router: PropTypes.object
}

export default SearchBox;