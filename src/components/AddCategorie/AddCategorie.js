/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StoreContext from '../Store/Context';
import { getAllCategories } from '../../services/Services';

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
  width: 200px;
  left: calc(50% - +100px);
  background: #012a46;
  top: calc(50% - +100px);
  height: 200px;
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

const HandlerButton = styled.input`
  position: fixed;
  top: calc(100% + -75px);
  left: calc(100% + -75px);
  width: 50px;
  height: 50px;
  border-radius: 100px;
  border: none;
  font-size: 36px;
  cursor: pointer;
  background: #E67555;
`;

const handleAddCategorie = (categorieName,
  setOpenModal, setCategories, token) => {
  const data = {
    name: categorieName,
  };
  const httpClient = axios.create({
    baseURL: 'https://projeto-integrador-4.herokuapp.com',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  httpClient.post('/categories', data)
    .then(() => {
      setOpenModal(false);
      getAllCategories().then((res) => setCategories(res.data));
    })
  // eslint-disable-next-line no-alert
    .catch((err) => window.alert(err));
};

const AddCategorie = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [categorieName, setCategorieName] = useState('');
  const { token } = useContext(StoreContext);
  const { setCategories } = props;
  return (
    <>
      <HandlerButton type="button" value="+" onClick={() => setOpenModal(true)} />
      {openModal && (
        <OverlaySection>
          <Section>
            <CloseButton type="button" value="X" onClick={() => setOpenModal(false)} />
            <Form onSubmit={(e) => {
              e.preventDefault();
              handleAddCategorie(categorieName,
                setOpenModal, setCategories, token);
            }}
            >
              <TextInput type="text" placeholder="Name" onChange={(e) => setCategorieName(e.target.value)} />
              <SubmitButton type="submit" value="Create categorie" />
            </Form>
          </Section>
        </OverlaySection>
      )}
    </>
  );
};

export default AddCategorie;
