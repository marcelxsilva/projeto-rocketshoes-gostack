

export const addProductToCartRequest = (id) => {
    return {
        type: '@cart/ADD_REQUEST',
        id,
    }
}

export const addProductToCartSuccess = (product) => {
    return {
        type: '@cart/ADD_SUCCESS',
        product,
    }
}

export const removeProductFromCart = (id) => {
    return {
        type: '@cart/REMOVE',
        id: id
    }
}

export const updateAmountRequest = (id, amount) => {
    return {
        type: '@cart/UPDATE_AMOUNT_REQUEST',
        id, 
        amount
    }
} 

export const updateAmountSuccess = (id, amount) => {
    return {
        type: '@cart/UPDATE_AMOUNT_SUCCESS',
        id, 
        amount
    }
} 