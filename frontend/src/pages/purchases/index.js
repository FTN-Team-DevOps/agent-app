import { useEffect, useState } from "react";
import { getPurchases } from "../../api/purchase";
import Header from "../../components/header"
import "../../theme/global-styles.css";

const PurchasesPage = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    loadProducts();
  }, [])

  const loadProducts = async () => {
    const _purchases = await getPurchases();
    setPurchases(_purchases);
  }

  return (
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
          {purchases && purchases.map((p) => (
            <div className="book-container">
              <img src={p.image} height="220" alt="" />
              <div className="book-info-wrapper">
                <div className="book-heading">{p.name}</div>
                <div className="book-author">{p.description}</div>
                <br />
                <div className="book-author">Paid: {p.price}$</div>
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

export default PurchasesPage;
