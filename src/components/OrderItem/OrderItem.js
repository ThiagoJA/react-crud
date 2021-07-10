/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { DateFormat } from '../../utils/transformDate';

const Box = styled.div`
  display: flex;
  border: 2px solid white;
  border-radius: 4px;
  margin: 12px;
  padding: 16px;
  background: rgb(0, 0, 0, 0.7);
`;

const SubBox = styled.div`
  margin: 12px;
  p {
    margin-top: 4px;
  }
`;

const PaymentStatusP = styled.p`
  color: ${(props) => (props.isPaid ? 'green' : 'red')};
`;

const OrderItem = ({ order, idx }) => (
  <Box key={`Order ${order.id} - ${idx}`}>
    <SubBox>
      <p>ID</p>
      <p>{order.id}</p>
    </SubBox>
    <SubBox>
      <p>Date</p>
      <p>{DateFormat(order.moment)}</p>
    </SubBox>
    <SubBox>
      <p>Status</p>
      <PaymentStatusP isPaid={order.orderStatus === 'PAID'}>{order.orderStatus}</PaymentStatusP>
    </SubBox>
  </Box>
);

export default OrderItem;
