import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';
import { useSelector } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md'

export default function Header() {
    const cartSize = useSelector(state => state.cart.length);
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