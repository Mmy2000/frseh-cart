import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext()

export default function CartContextProvider(props) {

    let headers = {
      token: localStorage.getItem("userTaken"),
    };

    function displayCart() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {
            headers:headers
        })
        .then( (response)=> response)
        .catch( (error)=> error)
    }

    function deleteCartItem(productID) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productID}` , {
            headers:headers
        })
        .then( (response)=> response)
        .catch( (error)=> error)
    }

    function updateCartItem(productID , count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productID}` , {
          count:count
        } , {
            headers:headers
        })
        .then( (response)=> response)
        .catch( (error)=> error)
    }

    function addToCart(productId) {
        return axios
          .post(
            `https://ecommerce.routemisr.com/api/v1/cart`,
            {
              productId: productId,
            },
            {
              headers: headers,
            }
          )
          .then((response)=> response)
          .catch((err)=> err);
    }
    return <CartContext.Provider value={{addToCart , displayCart , deleteCartItem , updateCartItem}}>
        {props.children}
    </CartContext.Provider>
}