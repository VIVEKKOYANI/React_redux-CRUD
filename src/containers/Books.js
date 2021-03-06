import React, { Component } from 'react'
import { books } from '../data';
import Book from '../components/Book';

export default class Books extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(book => {
                                return (
                                    <Book key={book.id} book={book}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
