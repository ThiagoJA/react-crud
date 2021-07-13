/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TrashIcon from '../../icons/trash.png';
import PencilIcon from '../../icons/pencil.png';
import { getAllProducts } from '../../services/Services';
import StoreContext from '../Store/Context';

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid white;
  border-radius: 4px;
  margin: 12px;
  padding: 16px;
  background: rgb(0, 0, 0, 0.7);
  color: white;
`;

const InformationBox = styled.div`
  display: flex;
`;

const SubBox = styled.div`
  margin: 12px;
  width: 300px;
  p {
    margin-top: 4px;
  }
`;

const ActionBox = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    margin: 12px;
    cursor: pointer;
  }
`;

const deleteProduct = (id, setProducts, token) => {
  const httpClient = axios.create({
    baseURL: 'https://projeto-integrador-4.herokuapp.com',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  httpClient.delete(`/products/${id}`).then(() => {
    getAllProducts().then((res) => setProducts(res.data.content));
  });
};

const handleOpenEditModal = (setSelectedProductToEdit, setShowEditProductModal, id) => {
  setSelectedProductToEdit(id);
  setShowEditProductModal(true);
};

const ProductItem = ({
  product, setProducts, idx, setShowEditProductModal, setSelectedProductToEdit,
}) => {
  const { token } = useContext(StoreContext);
  return (
    <Box key={`product-id-${idx}`}>
      <InformationBox>
        <SubBox>
          <p>Name</p>
          <p>{product.name}</p>
        </SubBox>
        <SubBox>
          <p>Description</p>
          <p>{product.description}</p>
        </SubBox>
        <SubBox>
          <p>Price</p>
          <p>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </SubBox>
      </InformationBox>
      <ActionBox>
        <img src={PencilIcon} alt="edit" onClick={() => handleOpenEditModal(setSelectedProductToEdit, setShowEditProductModal, product.id)} />
        <img src={TrashIcon} alt="delete" onClick={() => deleteProduct(product.id, setProducts, token)} />
      </ActionBox>
    </Box>
  );
};

export default ProductItem;
