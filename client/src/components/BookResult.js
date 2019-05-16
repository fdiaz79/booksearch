import React from "react";
import API from "../utils/API";
import {BrowserRouter as Router} from "react-router-dom";

class BookResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
            deleted: false
        }
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleSaveClick = function(e) {
        this.setState({saved: true});
        const bookData = {
            title: this.props.title,
            authors: this.props.authors,
            link: this.props.link,
            img: this.props.img,
            description: this.props.description
        }
        e.preventDefault();
        API.addBookToDB(bookData).then(
            (response) => {
                console.log(response);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    handleDeleteClick(e) {
        this.setState({deleted: true});
        e.preventDefault();
        API.deleteBook(this.props.id).then(
            (response) => {
                console.log(response);
                Router.dispatch(this.props.location, null)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return(
            <div className="searchResponse" id={this.props.id} >
                <div className="row">
                    <div className="col-12 text-center">
                        <h4>{this.props.title}</h4>
                        <p>By: {this.props.authors}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="text-center">
                            <img className="img-thumbnail" src={this.props.img.thumbnail} alt="Book image" />
                        </div>
                        <div className="text-center">
                            {
                                // if link to book exists include View button else do not
                                <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button type="button" name="view">View</button></a>
                            }
                            {
                                // if this.props.path is "/" display save button else display Delete button
                                (this.props.path === "/")? <button type="button" name="save" onClick={this.handleSaveClick} disabled={this.state.saved}>{(this.state.saved)? "Saved" : "Save"}</button> : <button type="button" name="Delete" onClick={this.handleDeleteClick} disabled={this.state.deleted}>Delete</button>
                            }
                        </div>               
                    </div>
                    <div className="col-sm-8">
                        <p>{this.props.description}</p>
                    </div>            
                </div>
            </div>
        );
    }
}

export default BookResult;