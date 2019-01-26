import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class Saved extends Component {
  state = {
    savedBooks : []
  }
  
  componentDidMount(){
   this.queryBooks();
  }
  
  queryBooks = () => {
    axios.get("/api/books")
      .then((response) => {
        let tempArray = response.data;
        this.setState({savedBooks: tempArray});
      }).catch((error) =>{
        console.log(error);
      });
  }

  removeBooks = (book) => {
    let url = "/api/books/" + book.bookId;
    axios.delete(url)
      .then((response) => {
        this.queryBooks();
      }).catch((error) =>{
        console.log(error);
      });
  }

  render() {
    return (
        <div className="Saved">
          <div className="displayBooks">
            <button className="btn waves-effect waves-light blue" onClick={this.queryBooks}>Get Saved Books</button>
            <div className="results">
                {this.state.savedBooks.map((book, key) => (
                    <div className="book" key={key}>
                      <div>
                        <h4>{book.title}</h4>
                        <ul>
                        {book.authors.map((author)=>(
                            <li >{author}</li>
                        ))}
                        </ul>
                        <p>{book.description}</p>
                        <a className="bookLink" href={book.link}>
                        <img className="placeholder" alt="bookicon" src={book.image}/>
                        </a>
                        <div>
                          <button className="removeMe" onClick={() => this.removeBooks(book)}>Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
          </div>
        </div>
    );
  }
}

export default Saved;