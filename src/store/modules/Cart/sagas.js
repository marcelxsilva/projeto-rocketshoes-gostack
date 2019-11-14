import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';
import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import { addProductToCartSuccess, updateAmount } from './actions'

function* addProductToCart({ id }) {

    const productExists = yield select(
        state => state.cart.find(p => p.id === id)
    )

    const stock = yield call(api.get, `stock/${id}`);
    const amountStock = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;
    if(amount > amountStock){
        return;
    }
    if (productExists) {
        yield put(updateAmount(id, amount))
    }

    else {
        const response = yield call(api.get, `/products/${id}`);
        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price)
        }
        yield put(addProductToCartSuccess(data))
    }
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addProductToCart)
]);