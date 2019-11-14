import api from '../../../services/api';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import { addProductToCartSuccess } from './actions'

function* addProductToCart({ id }) {
    const response = yield call(api.get, `/products/${id}`);

    yield put(addProductToCartSuccess(response.data))
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addProductToCart)
]);