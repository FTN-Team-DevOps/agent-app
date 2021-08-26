import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/header"
import routes from "../../utils/routes";
import { getMyProducts } from "../../api/product";
import "../../theme/global-styles.css";

const ProductsEditPage = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    const _products = await getMyProducts();
    setProducts(_products);
  }

  const deleteCallback = (id) => {
    setProducts(products.filter((p) => p._id !== id));
  }

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

          <button className="button purple" onClick={() => history.push(routes.productAdd)}>Add New</button>
          <div className="books-container">
          {products && products.map((p) => (
            <div className="book-container" key={`my-product ${p._id}`}>
              <img src={p.image} height="220" alt="" />
              <div className="book-info-wrapper">
                <div className="book-heading">{p.name}</div>
                <div className="book-author">{p.description ?? 'No description'}</div>
                <div className="description-wrapper">
                  <p>{p.count} in stock</p>
                </div>
              </div>
              <div className="button-wrapper">
                <div className="price">({p.price} $)</div>
                <button className="button purple" onClick={() => history.push({
                  pathname: routes.productEdit,
                  state: { product: p },
                })}>Edit</button>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 50 }} />
    </div>
  )
};

export default ProductsEditPage;
