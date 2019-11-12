import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src='https://static.netshoes.com.br/produtos/tenis-vr-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_detalhe2.jpg?ims=326x'
                alt='image'
              />
            </td>
            <td>
              <strong> Tenis</strong>
              <span>R${99.00}</span>
            </td>
            <td>
              <div>
              <button type='button'>
                <MdRemoveCircleOutline size={20} color='#7159c1' />
              </button>
              <input type='number' readOnly value={1} />
              <button type='button'>
                <MdAddCircleOutline size={20} color='#7159c1' />
              </button>
              </div>
            </td>
            <td>
              <strong>R$ {200.00}</strong>
            </td>
            <td>
              <button type='button'>
                <MdDelete size='20' color='#7159c1' />
              </button>
            </td>
          </tr>
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
