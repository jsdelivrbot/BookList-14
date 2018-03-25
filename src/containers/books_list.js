import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BooksList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}>
                        {book.title}
                </li>
            )
        })    
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>    
        )
    }
}

function mapStateToProps(state) {
    return { //from redux store to props this BookList
        books: state.books
    }    
}

function mapDispatchToProps(dispatch) {
    //result call of selectBook should be passed to all of reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)    
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)

