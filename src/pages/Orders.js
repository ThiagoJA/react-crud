import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StoreContext from '../components/Store/Context';
import OrderItem from '../components/OrderItem/OrderItem';

const Main = styled.main`
  color: white;
`;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { token } = useContext(StoreContext);
  useEffect(() => {
    const httpClient = axios.create({
      baseURL: 'https://projeto-integrador-4.herokuapp.com',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    httpClient.get('/orders/myorders').then((res) => setOrders(res.data));
  }, []);
  return (
    <Main>
      {orders.map((order, idx) => <OrderItem order={order} idx={idx} />)}
    </Main>
  );
};

export default Orders;
