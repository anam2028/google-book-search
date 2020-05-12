import React, { Component } from 'react';
import Jumbotran from '../components/Jumbotran';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Card from '../components/Card';
import { removeBook, getSavedBooks} from '../utils/API'

class Saved extends Component {
    state = {
        bookList: []
    }
    componentDidMount() {
        this.handleGetSavedBooks()
    }

    handleGetSavedBooks = () => {
        getSavedBooks().then(({date: bookList}) =>{
            this.setState({bookList})
        }).catch(err => console.log(err))
    }

    handleRemoveBook = bookId => {
        removeBook(bookId).then(this.handleGetSavedBooks).catch(err => console.log(err))
    }

    render() {
        return(
            <>
            <Jumbotran
            fluid 
            bg={'dark'}
            color={'light'}
            pageTitle={'Viewing Saved Books'}
            >
            </Jumbotran>
            <Container>
                <Row>
                    {!this.state.bookList.length ? (
                        <h2 className = "text-center">No saved books, yet ...</h2>
                    ):(
                        this.state.bookList.map(book =>{
                            return (
                                <Column key={book._id} md={4}>
                                    <Card
                                    bg={'dark'}
                                    title={book.title}
                                    image={book.image ? book.image : undefined}>
                                        <small className="text-muted">
                                            {`By: ${
                                                book.authers.length ? book.authers.join(', ') : null
                                            }`}
                                        </small>
                                        <p>{book.description}</p>
                                        <button onClick={() => this.handleRemoveBook(book._id)} 
                                        className = "btn btn-danger btn-sm">
                                            Remove Book
                                        </button>

                                    </Card>
                                </Column>
                            )
                        })
                    )}
                </Row>
            </Container>
            </>
        );

    }
}

export default Saved;