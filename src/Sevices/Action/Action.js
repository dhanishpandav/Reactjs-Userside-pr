import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";

import { auth, db } from "../../components/MyFirebase/Myfirebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AddCart = (id, data) => {
    // console.log("doneeeeeeeeeeee", data);
    return {
        type: 'ADDCART',
        payload: { id, data }
    }
}
// console.log(data);


export const singleproduct = (data) => {
    // console.log(data);
    return {
        type: 'SINGLE_PRODUCT',
        payload: data
    }
}
export const paymentasync = (data) => {
    // console.log(data);
    return {
        type: 'CART_CLEAR',
    }
}


export const updateuser = (data, index) => {


    return {
        type: 'UPDATE_USER',
        payload: { data, index }
    }
}

export const Removedata = (id) => {
    // console.log(id,"hehjsdajsdg");
    return {
        type: 'DELETE_PRODUCT',
        payload: id
    }
}

export const Alldata = (data) => {
    // console.log(data, "alldata");
    return {
        type: 'ALL_DATA',
        payload: data
    }
}

export const SignupSuc = () => { 
    return { 
        type: 'SIGNUP_SUC' 
    } 
} 
 
export const SignupErr = (msg) => { 
    return { 
        type: 'SIGNUP_ERR', 
        payload: msg 
    } 
} 
 
export const SigninSuc = () => { 
    return { 
        type: 'SIGNIN_SUC' 
    } 
} 
 
export const SigninErr = (msg) => { 
    return { 
        type: 'SIGNIN_ERR', 
        payload: msg 
    } 
} 
 
export const SignOutSuc = () => { 
    return { 
        type: 'SIGNOUT_SUC', 
    } 
}

export const getproductAsync = () => {
    return async dispatch => {
        let AllGet = []
        let firedata = await getDocs(collection(db, "products"));
        firedata.forEach((doc) => {
            let all = { ...doc.data(), id: doc.id };
            AllGet = [...AllGet, all]
        })

        dispatch(Alldata(AllGet))

    }
}

export const SignUpasync = (data) => {

    return async dispatch => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed up  
                const user = userCredential.user;
                dispatch(SignupSuc())
                // ... 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                dispatch(SignupErr(errorCode))
                // .. 
            });
    }

}

export const SignInasync = (data) => {

    return async dispatch => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in  
                const user = userCredential.user;
                dispatch(SigninSuc());
                // ... 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch(SigninErr(errorCode));
            });
    }

}

export const LogoutAsync = () => {

    return async dispatch => {
        signOut(auth).then(() => {
            dispatch(SignOutSuc());
        }).catch((error) => {

        })
    }

}
