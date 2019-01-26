import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class Search extends Component {
  state = {
    search: "",
    booklist: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  formSubmit = (event) => {
    event.preventDefault();
    if(this.state.search){
      this.getBooks(this.state.search);
    }
    else{
      this.getBooks("War of the Worlds");
    }    
  };

  getBooks = (query) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`, )
      .then(res => {
        let list = res.data;
        let tempArray = [];
       
        
        for(let i = 0; i < 10; i++){
          let book = {
            id: i,
            title: res.data.items[i].volumeInfo.title,
            authors: [],
            description: res.data.items[i].volumeInfo.description,
            image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
            link:  res.data.items[i].volumeInfo.infoLink,
          }
          for(let j = 0; j < res.data.items[i].volumeInfo.authors.length; j++){
            book.authors.push(res.data.items[i].volumeInfo.authors[j]);
          }
          tempArray.push(book);
        }
        this.setState({
          booklist: tempArray
        });
    });
  };

  saveBook = (book) => {
    axios.post("/api/books", {
        id: book.id,
        title: book.title,
        authors: book.authors,
        description: book.description,
        image: book.image,
        link: book.link
    }).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
        <div className="Search">
          <div className="booksDisplay">
              <form className="searchBox">
                  <div className="input-field">
                  <input
                    type="text"
                    name="search"
                    value={this.state.search}
                    onChange={this.handleInputChange}
                  />
                    <button className="btn waves-effect waves-light green" onClick={this.formSubmit}>Submit</button>
                  </div>
              </form>
              <div className="results">
                {this.state.booklist.map((book, key) => (
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
                          <button className="saveMe" onClick={() => this.saveBook(book)}>Save</button>
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

export default Search;