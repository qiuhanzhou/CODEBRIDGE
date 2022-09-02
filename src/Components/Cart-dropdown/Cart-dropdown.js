import Button from '../Button/Button'
import './cart-dropdown.styles.scss'
import { CartContext } from '../../context/cart.context'
import { useContext } from 'react'
import CartItem from '../Cart-item/Cart-item'

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}
