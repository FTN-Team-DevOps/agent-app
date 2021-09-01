import { useHistory } from "react-router-dom";
import { useState } from "react";
import routes from "../../utils/routes";
import { createProduct } from "../../api/product";
import "../../theme/global-styles.css";

const ProductAddPage = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const createProductCallback = () => history.push(routes.productsEdit);

    createProduct({
      name,
      description,
      count,
      price,
      image,
    },
    createProductCallback);
  }

  return (
    <div className="auth-container">
      <div className="main-container background">
        <div className="form-wrapper">
          <div className="logo-wrapper">
            <br />
            <div className="header-logo-text">Online Store</div>
          </div>
          <div className="form-container">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Product Name"
                value={name}
                onChange={(val) => setName(val.target.value)}
                required
              />
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={price}
                onChange={(val) => setPrice(val.target.value)}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Image URL"
                value={image}
                onChange={(val) => setImage(val.target.value)}
                required
              />
              <input
                type="number"
                className="form-control"
                placeholder="Number of products in stock"
                value={count}
                onChange={(val) => setCount(val.target.value)}
                required
              />
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(val) => setDescription(val.target.value)}
                placeholder="Description"
              />
              <div className="button-wrapper" style={{ flexDirection: 'row' }}>
                <button className="btn btn-primary btn-block" type="submit" onClick={onSubmit}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductAddPage;
