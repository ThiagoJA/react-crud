/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TrashIcon from '../../icons/trash.png';
import PencilIcon from '../../icons/pencil.png';
import { getAllCategories } from '../../services/Services';
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

const deleteCategorie = (id, setCategories, token) => {
  const httpClient = axios.create({
    baseURL: 'https://projeto-integrador-4.herokuapp.com',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  httpClient.delete(`/categories/${id}`).then(() => {
    getAllCategories().then((res) => setCategories(res.data));
  });
};

const handleOpenEditModal = (setSelectedCategorieToEdit, setShowEditCategorieModal, id) => {
  setSelectedCategorieToEdit(id);
  setShowEditCategorieModal(true);
};

const CategorieItem = ({
  categorie, setCategories, idx, setShowEditCategorieModal, setSelectedCategorieToEdit,
}) => {
  const { token } = useContext(StoreContext);
  return (
    <Box key={`categorie-id-${idx}`}>
      <InformationBox>
        <SubBox>
          <p>Name</p>
          <p>{categorie.name}</p>
        </SubBox>
        <SubBox>
          <p>ID</p>
          <p>{categorie.id}</p>
        </SubBox>
      </InformationBox>
      <ActionBox>
        <img src={PencilIcon} alt="edit" onClick={() => handleOpenEditModal(setSelectedCategorieToEdit, setShowEditCategorieModal, categorie.id)} />
        <img src={TrashIcon} alt="delete" onClick={() => deleteCategorie(categorie.id, setCategories, token)} />
      </ActionBox>
    </Box>
  );
};

export default CategorieItem;
