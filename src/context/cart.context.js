import { createContext, useState } from 'react'

function addCartItem(cartItems, productToAdd) {
  //find if cartItems contain productToAdd (new item)

  const existingCartItem = cartItems.find((item) => item.id === productToAdd.id)

  //If found, increment quantity

  if (existingCartItem) {
    const index = cartItems.indexOf(existingCartItem)
    const newArray = [...cartItems]
    newArray[index].quantity += 1
  }
  //return new array with modified cartItems/ new cart item

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  //cartItems = [
  //   {
  //     "id": 1,
  //     "name": "Brown Brim",
  //     "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
  //     "price": 25
  //     "quantity": 1
  //   }
  // ]

  //trigger when user click the add to cart button
  function addItemToCart(prodctToAdd) {
    setCartItems(addCartItem(cartItems, prodctToAdd))
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, setCartItems }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
