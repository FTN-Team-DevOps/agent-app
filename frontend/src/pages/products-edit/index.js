import Header from "../../components/header"
import { useHistory } from "react-router-dom";
import routes from "../../utils/routes";
import "../../theme/global-styles.css";

const ProductsEditPage = () => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <div>
        <div className="main-container">
          <div className="books-section-heading">your products</div>
          <div className="books-section-desc">
            Here is the list of products you have posted.
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
                <button className="button purple" onClick={() => history.push(routes.productEdit)}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 50 }} />
    </div>
  )
};

export default ProductsEditPage;
