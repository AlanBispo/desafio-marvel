import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const DescriptionContext = createContext();

export const DescriptionProvider = ({ children }) => {
  const [produto, setProduto] = useState({});

  /* useEffect(() => {
    const cartLocal = window.localStorage.getItem("cart");
    if (cartLocal) {
      setCart(JSON.parse(cartLocal))
    }
  }, []); */

  const addToDescription = (product) => {
    setProduto(() => ({
      [product.id]: product
    }))
  };
  return (
    <DescriptionContext.Provider value={{ produto, addToDescription }}>
      {children}
    </DescriptionContext.Provider>
  );
};

export const useProduto = () => {
    const produto = useContext(DescriptionContext);
    return produto;
  };
