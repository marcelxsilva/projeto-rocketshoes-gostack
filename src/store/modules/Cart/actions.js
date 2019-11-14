

export const addProductToCart = (product) => {
    return {
        type: '@cart/ADD',
        product
    }
}

export const removeProductFromCart = (id) => {
    return {
        type: '@cart/REMOVE',
        id: id
    }
}

export const updateAmount = (id, amount) => {
    return {
        type: '@cart/UPDATE_AMOUNT',
        id, 
        amount
    }
} 