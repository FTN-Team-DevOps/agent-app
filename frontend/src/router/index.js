import React from 'react';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import routes from '../utils/routes';
import RegisterPage from '../pages/register';
import BooksPage from '../pages/books';
import BooksEditPage from '../pages/books-edit';
import PurchasedBooksPage from '../pages/purchased-books';
import ReportsPage from '../pages/reports';
import LoginPage from '../pages/login';

const CustomRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.books} component={BooksPage} />
      <Route path={routes.login} component={LoginPage} />
      <Route path={routes.register} component={RegisterPage} />
      <Route path={routes.booksEdit} component={BooksEditPage} />
      <Route path={routes.purchasedBooks} component={PurchasedBooksPage} />
      <Route path={routes.reports} component={ReportsPage} />
      <Route path="">
        <Redirect to={routes.login} />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default CustomRouter;
