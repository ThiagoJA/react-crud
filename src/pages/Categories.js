/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../services/Services';
import CategorieItem from '../components/CategorieItem/CategorieItem';
import EditCategorie from '../components/EditCategorie/EditCategorie';
import AddCategorie from '../components/AddCategorie/AddCategorie';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showEditCategorieModal, setShowEditCategorieModal] = useState(false);
  const [selectedCategorieToEdit, setSelectedCategorieToEdit] = useState(0);
  useEffect(() => {
    getAllCategories().then((res) => setCategories(res.data));
  }, []);
  return (
    <section>
      {categories.map((categorie, idx) => <CategorieItem key={`categorie-${categorie.id}`} categorie={categorie} idx={idx} setCategories={setCategories} setSelectedCategorieToEdit={setSelectedCategorieToEdit} setShowEditCategorieModal={setShowEditCategorieModal} />)}
      {showEditCategorieModal && (
        <EditCategorie setShowEditCategorieModal={setShowEditCategorieModal} selectedCategorieToEdit={selectedCategorieToEdit} setCategories={setCategories} />
      )}
      <AddCategorie setCategories={setCategories} />
    </section>
  );
};

export default Categories;
