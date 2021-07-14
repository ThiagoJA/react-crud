/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import Orders from './Orders';
import Products from './Products';
import Categories from './Categories';
import StoreContext from '../components/Store/Context';

const Main = styled.main`
  margin: 0px;
  padding: 0px;
  padding-bottom: 20px;
  width: 100%;
  min-height: 100vh;
  background: #00121e;
`;

const NavBar = styled.nav`
  display: flex;
  list-style: none;
  background: #E67555;
`;

const ListItem = styled.li`
  padding: 32px 0px;
  text-decoration: none;
  a {
    padding: 32px;
    text-decoration: none;
    color: #00121e;
    &:hover{
      text-decoration: underline;
    }
  }
  input {
    border: none;
    background: transparent;
    color: #00121e;
    font-size: 16px;
    padding: 0px 32px;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
`;

const logout = (setPage, setToken) => {
  setToken('');
  setPage(0);
};

const HomePage = ({ setPage }) => {
  const { setToken } = useContext(StoreContext);
  return (
    <Main>
      <BrowserRouter>
        <NavBar>
          <ListItem>
            <Link to="/orders">
              Orders
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/products">
              Products
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/categories">
              Categories
            </Link>
          </ListItem>
          <ListItem>
            <input type="button" value="Logout" onClick={() => logout(setPage, setToken)} />
          </ListItem>
        </NavBar>

        <div>
          <Switch>
            <Route exact path={['/orders', '/']} component={Orders} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/categories" component={Categories} />
          </Switch>
        </div>
      </BrowserRouter>
    </Main>
  );
};

export default HomePage;
