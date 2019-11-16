import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch} from 'react-redux';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import { addProductToCartRequest } from '../../store/modules/Cart/actions';

export default function Home() {
  const dispatch = useDispatch();
  const amount = useSelector(state => state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}));

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

  const handleAddProduct = id => {
    dispatch(addProductToCartRequest(id))
  }
  return (
    <ProductList>
      {
        dataStore.products.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span className='price'>{product.priceFormated}</span>
            <button type='button' onClick={() => handleAddProduct(product.id)}>
              <div><MdAddShoppingCart size='16' color='#fff' />{
                amount[product.id] || 0
              }</div>
              <span>Adicionar ao Carrinho</span>
            </button>
          </li>
        ))
      }
    </ProductList>
  );
}