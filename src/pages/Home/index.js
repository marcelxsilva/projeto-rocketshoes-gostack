import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';

function Home({ dispatch }) {
  const [dataStore, setDataStore] = useState({
    products: [],
  });

  useEffect(() => {
    getAllProductAPI()
  }, [])

  const getAllProductAPI = async () => {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product, priceFormated: formatPrice(product.price)
    }));
    setDataStore({ ...dataStore, products: data });
  }

  const handleAddProduct = product => {
    dispatch({
      type: 'ADD_TO_CART',
      product
    })
  }
  return (
    <ProductList>
      {
        dataStore.products.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span className='price'>{product.priceFormated}</span>
            <button type='button' onClick={() => handleAddProduct(product)}>
              <div><MdAddShoppingCart size='16' color='#fff' />{3}</div>
              <span>Adicionar ao Carrinho</span>
            </button>
          </li>
        ))
      }
    </ProductList>
  );
}
export default connect()(Home)