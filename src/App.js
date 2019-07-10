import React from 'react';
import BookCard from './components/bookCard.js'
import NavBar from './components/navBar.js'
import ShoppingCart from './components/shoppingCart.js'
class App extends React.Component {

  state = {
    books: [],
    navBarTxt: ""
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books');
    const json = await response.json();
    this.setState({
      books: json.map(book => {
        return {
          ...book,
          quantity: 0
        }
      })
    });
    console.log(this.state.books)
  }

  updateNavBar = e => {
    e.preventDefault();
    this.setState({
      navBarTxt: e.target.value
    })
  };

  addItemToCart = e => {
    const books = this.state.books;
    const num = e.target.id;
    console.log(num);
    console.log(this.state.books);
    this.setState(prevState => ({
      books: books.map((book, i) => {
        if (book.id == num) {
          return {
            ...book,
            quantity: prevState.books[i].quantity + 1,
            inCart: true
          }
        } else {
          return {
            ...book
          }
        }
      })
    }))
  };
  removeItemFromCart = e => {
    const books = this.state.books;
    const num = e.target.id;
    console.log(num);
    console.log(this.state.books);
    this.setState({
      books: books.map((book, i) => {
        if (book.id == num) {
          return {
            ...book,
            quantity: 0,
            inCart: false
          }
        } else {
          return {
            ...book
          }
        }
      })
    })
  };

  render() {
    const cartItems = this.state.books.filter(book => book.inCart === true);
    const displayBooks = this.state.books.filter(book => book.title.toUpperCase().includes(this.state.navBarTxt.toUpperCase()) || book.author.toUpperCase().includes(this.state.navBarTxt.toUpperCase()) === true );
    return (
        <div className='container-fluid p-0'>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Some BookShop</a>
            <div className="float-right mr-5">
              <NavBar navBarText={this.updateNavBar}/>
            </div>

          </nav>
         <div className='row'>
           <div className='col-7'>
             {displayBooks.map(book => {
               return (
                   <BookCard
                       key={book.id}
                       addItemToCart={this.addItemToCart}
                       {...book}
                   />
               )
             })}
           </div>
           <div className='col-5'>
             <ShoppingCart items={cartItems} removeItemFromCart={this.removeItemFromCart}/>
           </div>
         </div>

        </div>

    )
  }

}

export default App;
