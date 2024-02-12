import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [dataProduct, setDataProduct] = useState([]);
    const [isFetch , setIsFetch] = useState(false);
    
    //fetch all product data from API
    useEffect(() => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`http://${process.env.REACT_APP_BACKEND_IP}/api/admin/product`, requestOptions)
        .then(response => response.json())
        .then(result => {
            setDataProduct(result.data);
            setIsFetch(!isFetch);
        })
        .catch(error => console.log('error', error));
    },[]);
    const contextValue = {dataProduct, isFetch};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
