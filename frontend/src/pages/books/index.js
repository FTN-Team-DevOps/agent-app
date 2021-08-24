import Header from "../../components/header"
import "./style.css";

const BooksPage = () => (
  <div>
    <Header />
    <div>
      <div className="main-container">
        <div className="books-section-heading">all products</div>
        <div className="books-section-desc">
          We offer a wide selection of products available for purchase.
        </div>
        <div className="books-devider"></div>

        <div className="books-container">
          <div className="book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91gZX7sjnpL.jpg" width="160" height="220" />
            <div className="book-info-wrapper">
              <div className="book-heading">Book name</div>
              <div className="book-author">Book author</div>
              <div className="description-wrapper">
                <p>12 in stock</p>
              </div>
            </div>
            <div className="button-wrapper">
              <div className="price">(25 $)</div>
              <button className="button purple">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <div>
      <div>
        <div className="main-container">
          <div className="books-section-heading">your purchases</div>
          <div className="books-devider"></div>

          <div className="books-container">
            <div className="book-container">
              <img src="../../assets/book.svg" width="160" height="220" />
              <div className="book-info-wrapper">
                <div className="book-heading">Book name</div>
                <div className="book-author">Book author</div>
                <div className="description-wrapper">
                  <p>Some description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="main-container">
          <div className="message-wrapper">
            <div className="message-heading">No Purchases</div>
            <div className="message-content">
              When you buy a book, it will appear here.
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <div style={{ marginBottom: 50 }} />
  </div>
);

export default BooksPage;
