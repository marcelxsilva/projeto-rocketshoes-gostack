import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';
import { connect } from 'react-redux';

function Cart({ cart, dispatch }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            cart.map(product => (
              <tr>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </td>
                <td>
                  <strong> {product.title}</strong>
                  <span>{product.priceFormated}</span>
                </td>
                <td>
                  <div>
                    <button type='button'>
                      <MdRemoveCircleOutline size={20} color='#7159c1' />
                    </button>
                    <input type='number' readOnly value={product.amount} />
                    <button type='button'>
                      <MdAddCircleOutline size={20} color='#7159c1' />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$ {200.00}</strong>
                </td>
                <td>
                  <button type='button' onClick={() => dispatch({ type: 'REMOVE_PRODUCT_CART', id: product.id })}>
                    <MdDelete size='20' color='#7159c1' />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </ProductTable>
      <footer>
        <button type='button'>Finalizar Pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$ {1920, 28}</strong>
        </Total>
      </footer>
    </Container>
  );
}
const stateToProps = state => ({
  cart: state.cart
})
export default connect(stateToProps)(Cart);