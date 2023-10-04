// import { Incprice } from "../Action/Action";

const initiale = {
    products: [],
    product: [],
    msg: '',
    isLogin: false
}

const ProductReducer = (state = initiale, action) => {

    switch (action.type) {
        case 'ADDCART':
            const singlepr = state.product.findIndex(item => item.id == action.payload.id);
            if (singlepr >= 0) {
                return (
                    state.products[singlepr].data
                )

            }
            else {

                return (
                    {
                        ...state,
                        product: [...state.product, action.payload.data]
                    }
                )
            }
        case 'ALL_DATA':
            return (
                {
                    ...state,
                    products: action.payload
                }
            )
        case 'SINGLE_PRODUCT':
            return (
                {
                    ...state,
                    product: action.payload
                }
            )

        case 'DELETE_PRODUCT':

            let alldata = state.product

            //   console.log(alldata);

            let allprs = alldata.filter((val) => {
                // return val.id != action.payload
                return val.id != action.payload
            })


            return (
                {
                    ...state,
                    product: allprs

                }
            )
        case 'SIGNUP_SUC':
            return {
                ...state
            }

        case 'SIGNUP_ERR':
            return {
                ...state,
                msg: action.payload
            }

        case 'SIGNIN_SUC':
            return {
                ...state,
                isLogin: true
            }

        case 'SIGNIN_ERR':
            return {
                ...state,
                msg: action.payload
            }

        case 'SIGNOUT_SUC':
            return {
                ...state,
                msg: action.payload,
                isLogin: false
            }
        default:
            return state
    }

}


export default ProductReducer