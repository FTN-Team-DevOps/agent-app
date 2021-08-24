import Header from "../../components/header"
import "../../theme/global-styles.css";

const PurchasesPage = () => (
  <div>
    <Header />
    <div>
      <div className="main-container">
        <div className="books-section-heading">your purchases</div>
        <div className="books-section-desc">
          Here is the list of products you have purchased.
        </div>
        <div className="books-devider"></div>

        <div className="books-container">
          <div className="book-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91gZX7sjnpL.jpg" width="160" height="220" />
            <div className="book-info-wrapper">
              <div className="book-heading">Book name</div>
              <div className="book-author">Book author</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ marginBottom: 50 }} />
  </div>
);

export default PurchasesPage;
