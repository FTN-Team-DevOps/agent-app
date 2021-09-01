import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/product";
import { createPurchase } from "../../api/purchase";
import { getUser } from "../../api/user";
import Header from "../../components/header"
import "../../theme/global-styles.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [me, setMe] = useState(null);

  useEffect(() => {
    loadMe();
    loadProducts();
  }, [])

  const loadProducts = async () => {
    const _products = await getAllProducts();
    setProducts(_products);
  }

  const loadMe = async () => {
    const _me = await getUser();
    setMe(_me);
  }

  const buyNow = (product) => {
    createPurchase({
      customer: me._id,
      product: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    });

    setProducts(products.map((p) => (
      p._id === product._id
        ? { ...product, count: product.count - 1 }
        : p
      )
    )
    .filter((p) => p.count > 0));
  }

  return (
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
            {products && products.map((p) => (
              <div className="book-container" key={`product ${p._id}`}>
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
                  {p.seller !== me?._id && (
                    <button className="button purple" onClick={() => buyNow(p)} >Buy Now</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 50 }} />
    </div>
  );
};

export default ProductsPage;
