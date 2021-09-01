import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import routes from "../../utils/routes";
import { updateProduct, deleteProduct } from "../../api/product";
import "../../theme/global-styles.css";

const ProductEditPage = () => {
  const history = useHistory();
  const location = useLocation();

  const product = location.state.product;

  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [count, setCount] = useState(product.count);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);

  const onSubmit = (e) => {
    e.preventDefault();
    const createProductCallback = () => history.push(routes.productsEdit);

    updateProduct(
      {
        name,
        description,
        count,
        price,
        image,
        _id: product._id,
      },
      createProductCallback
    );
  }

  const onDelete = (e) => {
    const deleteProductCallback = () => history.push(routes.productsEdit);
    deleteProduct(product._id, deleteProductCallback);
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
                <button className="btn btn-primary btn-block" type="submit" style={{ margin: 5 }} onClick={onSubmit}>
                  Save
                </button>
                <button className="btn btn-primary btn-block" type="button" style={{ margin: 5 }} onClick={onDelete}>
                  Remove
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductEditPage;
