/* eslint-disable react/prop-types */
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import Orders from './Orders';
import { Products } from './Products';
import { Users } from './Users';
import { Categories } from './Categories';

const Main = styled.main`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100vh;
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

const HomePage = ({ setPage }) => (
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
          <Link to="/users">
            Users
          </Link>
        </ListItem>
        <ListItem>
          <input type="button" value="Logout" onClick={() => setPage(0)} />
        </ListItem>
      </NavBar>

      <div>
        <Switch>
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/categories" component={Categories} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  </Main>
);

export default HomePage;
