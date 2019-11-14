import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md'

function Header({ cartSize }) {
    return (
        <Container>
            <Link to='/'><img src={logo} alt='rocketshoes' /></Link>
            <Cart to='/cart'>
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>{cartSize} Itens</span>
                </div>
                <MdShoppingBasket size={36} color='#fff' />
            </Cart>
        </Container>
    );
}
const stateToProps = state => ({
    cartSize: state.cart.length
});
export default connect(stateToProps)(Header);