/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/Services';
import ProductItem from '../components/ProductItem/ProductItem';
import EditProduct from '../components/EditProduct/EditProduct';
import AddProduct from '../components/AddProduct/AddProduct';

const Products = () => {
  const [produtcs, setProducts] = useState([]);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [selectedProductToEdit, setSelectedProductToEdit] = useState(0);
  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.data.content));
  }, []);
  return (
    <section>
      {produtcs.map((product, idx) => <ProductItem key={`product-${product.id}`} product={product} idx={idx} setProducts={setProducts} setSelectedProductToEdit={setSelectedProductToEdit} setShowEditProductModal={setShowEditProductModal} />)}
      {showEditProductModal && (
        <EditProduct setShowEditProductModal={setShowEditProductModal} selectedProductToEdit={selectedProductToEdit} setProducts={setProducts} />
      )}
      <AddProduct setProducts={setProducts} />
    </section>
  );
};

export default Products;
