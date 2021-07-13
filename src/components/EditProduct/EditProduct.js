/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProductById, editProduct } from '../../services/Services';

const OverlaySection = styled.section`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const Section = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 400px;
  left: calc(50% - +150px);
  background: #012a46;
  top: calc(50% - +150px);
  height: 400px;
  border-radius: 10px;
  border: 2px solid #3e95cc;
`;

const CloseButton = styled.input`
  align-self: flex-end;
  border: none;
  background: transparent;
  margin: 10px;
  padding:12px;
  font-size: 16px;
  color: #3e95cc;
  font-weight: bold;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 60%;
`;

const SubmitButton = styled.input`
  background: #3de6af;
  color: #00121e;
  padding: 6px;
  width: 150px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #31e0a7;
    box-shadow: 0px 0px 15px 9px rgba(61,230,175,0.2);
  }
`;

const TextInput = styled.input`
  border-radius: 4px;
  border: 2px solid #3e95cc;
  padding: 12px 12px 12px 32px;
  background-color: #082336;
  transition: all 0.2s;
  color: #3e95cc;
  margin-bottom: 16px;
  ::placeholder {
    color: #3e95cc;
  }
  &:focus {
    border-color: #28a3f1;
    outline: none;
    box-shadow: 0px 0px 25px 9px rgba(28,159,255,0.5);
    ::placeholder {
      color: #28a3f1;
    }
  }
`;

const handleUpdateProduct = (
  productToEdit, productName, productDescription,
  productImage, productPrice, setShowEditProductModal,
) => {
  const data = {
    id: productToEdit.id,
    description: !!productDescription ? productDescription : productToEdit.description,
    name: !!productName ? productName : productToEdit.name,
    imgUrl: !!productImage ? productImage : productToEdit.imgUrl,
    price: !!productPrice ? productPrice : productToEdit.price,
  };
  editProduct(productToEdit.id, data)
    .then(() => setShowEditProductModal(false))
    // eslint-disable-next-line no-alert
    .catch((err) => window.alert(err));
};

const EditProduct = ({ selectedProductToEdit, setShowEditProductModal }) => {
  const [productToEdit, setProductToEdit] = useState({});
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productPrice, setProductPrice] = useState('');
  useEffect(() => {
    getProductById(selectedProductToEdit).then((res) => {
      setProductToEdit(res.data);
    });
  }, []);
  return (
    <OverlaySection>
      <Section>
        <CloseButton type="button" value="X" onClick={() => setShowEditProductModal(false)} />
        <Form onSubmit={(e) => {
          e.preventDefault();
          handleUpdateProduct(productToEdit, productName,
            productDescription, productImage, productPrice,
            setShowEditProductModal);
        }}
        >
          <TextInput type="text" placeholder="Name" onChange={(e) => setProductName(e.target.value)} />
          <TextInput type="text" placeholder="Description" onChange={(e) => setProductDescription(e.target.value)} />
          <TextInput type="text" placeholder="Image" onChange={(e) => setProductImage(e.target.value)} />
          <TextInput type="text" placeholder="Price" onChange={(e) => setProductPrice(e.target.value)} />
          <SubmitButton type="submit" value="Update product" />
        </Form>
      </Section>
    </OverlaySection>
  );
};

export default EditProduct;
