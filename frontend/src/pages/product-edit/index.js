import "../../theme/global-styles.css";

const ProductEditPage = () => {
  return (
    <div class="auth-container">
      <div class="main-container background">
        <div class="form-wrapper">
          <div class="logo-wrapper">
            <br />
            <div class="header-logo-text">Online Store</div>
          </div>
          <div class="form-container">
            <form>
              <input
                type="text"
                class="form-control"
                placeholder="Product Name"
                required
              />
              <input
                type="number"
                class="form-control"
                placeholder="Price"
                required
              />
              <input
                type="text"
                class="form-control"
                placeholder="Image URL"
                required
              />
              <input
                type="number"
                class="form-control"
                placeholder="Number of products in stock"
                required
              />
              <input
                type="text"
                class="form-control"
                placeholder="Description"
                required
              />
              <div class="button-wrapper" style={{ flexDirection: 'row' }}>
                <button class="btn btn-primary btn-block" type="submit" style={{ margin: 5 }}>
                  Save
                </button>
                <button class="btn btn-primary btn-block" type="button" style={{ margin: 5 }}>
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
