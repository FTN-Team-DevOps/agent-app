import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/header"
import routes from "../../utils/routes";
import { getMyProducts } from "../../api/product";
import { getSold } from "../../api/purchase";
import "../../theme/global-styles.css";

const ProductsEditPage = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [bestSeller, setBestSeller] = useState(null);
  const [bestIncome, setBestIncome] = useState(null);

  const sortByNumber = (_soldProducts) => {
    let count = _soldProducts.reduce((res, val) => {
      if(res[val.product]) {
        res[val.product]++;
      } else {
        res[val.product] = 1;
      }
      return res;
    }, {});
    
    let output = Object.entries(count)
      .sort((a, b) => b[1]-a[1]) //2)
      .map(v => v[0]); //3)
    
    return output[0] ?? [];
  }

  const sortByIncome = (_soldProducts) => {
    let count = _soldProducts.reduce((res, val) => {
      if(res[val.product]) {
        res[val.product] = res[val.product].price + val.price;
      } else {
        res[val.product] = val.price;
      }
      return res;
    }, {});
    
    let output = Object.entries(count)
      .sort((a, b) => b[1]-a[1]) //2)
      .map(v => v[0]); //3)
    
    return output[0] ?? [];
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    const _products = await getMyProducts();
    setProducts(_products);

    const _soldProducts = await getSold();
    const _bestSeller = sortByNumber(_soldProducts);
    const _bestIncome = sortByIncome(_soldProducts);

    if (_bestSeller) {
      setBestSeller(_products.find((p) => p._id === _bestSeller));
    }
    if (_bestIncome) {
      setBestIncome(_products.find((p) => p._id === _bestIncome));
    }
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

          
          {bestSeller && (
            <>
              <div className="books-section-heading">best selling product</div>
              <div className="books-devider"></div>
              <div className="books-container">
                <div className="book-container" key={`my-product ${bestSeller._id}`}>
                  <img src={bestSeller.image} height="220" alt="" />
                  <div className="book-info-wrapper">
                    <div className="book-heading">{bestSeller.name}</div>
                    <div className="book-author">{bestSeller.description ?? 'No description'}</div>
                    <div className="description-wrapper">
                      <p>{bestSeller.count} in stock</p>
                    </div>
                  </div>
                  <div className="button-wrapper">
                    <div className="price">({bestSeller.price} $)</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {bestIncome && (
            <>
              <div className="books-section-heading">the product that brought the most revenue</div>
              <div className="books-devider"></div>
              <div className="books-container">
                <div className="book-container" key={`my-product ${bestIncome._id}`}>
                  <img src={bestIncome.image} height="220" alt="" />
                  <div className="book-info-wrapper">
                    <div className="book-heading">{bestIncome.name}</div>
                    <div className="book-author">{bestIncome.description ?? 'No description'}</div>
                    <div className="description-wrapper">
                      <p>{bestIncome.count} in stock</p>
                    </div>
                  </div>
                  <div className="button-wrapper">
                    <div className="price">({bestIncome.price} $)</div>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
      <div style={{ marginBottom: 50 }} />
    </div>
  )
};

export default ProductsEditPage;
