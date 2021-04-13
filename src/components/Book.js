import React from 'react'

function Book({book}) {
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
}

export default Book
