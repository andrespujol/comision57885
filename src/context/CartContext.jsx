import React, { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd, quantity) => {
    const newObj = {
      ...productToAdd,
      quantity,
    };
    if(isInCart(newObj.id)){
      const carritoActualizado = cart.map((el) => {
        if (el.id === newObj.id){
           el.quantity += newObj.quantity
        }
        return el
    })
    setCart(carritoActualizado)
    }else{

      setCart([...cart, newObj]);
    }
  };

  const isInCart = (id) => {
    return cart.some((el) => el.id === id) // true o false
  }
  const getTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
    return total
  }
  const getQuantity = () =>{
    let count = 0
    cart.forEach((el) =>{
      count = count + el.quantity
    })
    return count
  }
  const removeItem = (id) => {
    const deleteItem = cart.filter((el) => el.id !== id)
    setCart([...deleteItem])
  }
  const clearCart = () => {
    setCart([])
  }

  console.log(cart);

  return (
    <Context.Provider value={{ cart, setCart, addItem, getTotal, removeItem, clearCart, getQuantity }}>
      {children}
    </Context.Provider>
  );
};

export default Context