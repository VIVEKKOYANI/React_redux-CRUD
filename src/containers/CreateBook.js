import React, { Component } from 'react'
import './CreateBook.css';
export default class CreateBook extends Component {
    render() {
        return (
            <div className="create-book">
                <form>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="Enter Title"
                        />
                    </div>
                    <div className="form-group">
                    <input 
                            type="text"
                            className="form-control"
                            name="author"
                            placeholder="Enter Author"
                        />
                    </div>
                    <div className="form-group">
                    <input 
                            type="text"
                            className="form-control"
                            name="Year"
                            placeholder="Enter Year Published"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Add</button>
                        <button type="button" className="btn btn-default">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}
