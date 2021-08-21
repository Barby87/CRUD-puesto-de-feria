const initialState: any = {
    data: []
};

const productReducer = (
    prevState = initialState,
    action: {
        payload: any,
        type: string
    }
) => {
    switch (action.type) {
        case 'PRODUCT_CREATE':
            return {
                data: [ ...prevState.data, action.payload ],
            };
        // case 'PRODUCT_READ':
        //     return {
        //         data: prevState.data.find((product:any) => parseInt(product.id) === parseInt(action.payload.id))
        //     }
        case 'PRODUCT_DELETE':
            return {
                data: prevState.data.filter((product: any) => parseInt(product.id) !== parseInt(action.payload)),
            };
        case 'PRODUCT_UPDATE':
            return {
                data: prevState.data.map((product: any) => {
                    if(product.id === action.payload.id)
                        return action.payload
                        return product;
                }),
            };
        default:
            return prevState;
    }
};

export default productReducer;