import React, {component} from 'react';
// import Jumbotran from '../components/Jumbotran';
// import Container from '../components/Container';
// import Row from '../components/Row';
// import Column from '../components/Column';
// import Card from '../components/Card';
import {searchGoogleBooks, saveBook, getSavedBooks} from '../utils/API';

class Search extends component {
    state = {
        searchTerm: '',
        bookList: [],
        savedBookIds: [],
        error: null
    }

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};

handleFormSubmit = event => {
    event.preventDefault()
    if (this.state.searchTerm === ''){
        return this.setstate({error: 'Please put in a title.'})
    }
}
}
export default Search;
