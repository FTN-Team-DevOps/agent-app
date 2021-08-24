import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import routes from '../utils/routes';
import RegisterPage from '../pages/register';
import ProductPage from '../pages/products';
import ProductsEditPage from '../pages/products-edit';
import ProductEditPage from '../pages/product-edit';
import PurchasesPage from '../pages/purchases';
import ReportsPage from '../pages/reports';
import LoginPage from '../pages/login';

const CustomRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.products} component={ProductPage} />
      <Route path={routes.register} component={RegisterPage} />
      <Route path={routes.productsEdit} component={ProductsEditPage} />
      <Route path={routes.productEdit} component={ProductEditPage} />
      <Route path={routes.purchases} component={PurchasesPage} />
      <Route path={routes.reports} component={ReportsPage} />
      <Route path={routes.login} component={LoginPage} />
      <Route path="">
        <Redirect to={routes.login} />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default CustomRouter;
