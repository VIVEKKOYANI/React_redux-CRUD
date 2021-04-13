import React, { Component } from 'react'
import { books } from '../data';
export default class Book extends Component {
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
                                    <tr key={book.id}>
                                        <td>{book.id}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.year}</td>
                                        <td>
                                            <butoon type="button" className="btn btn-danger">Delete</butoon>
                                            <butoon type="button" className="btn btn-default">Edit</butoon>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
