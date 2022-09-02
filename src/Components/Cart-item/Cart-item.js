import './cart-item.styles.scss'

export default function CartItem({ cartItem }) {
  //define category object which is ready to be received from outside

  //destructure the variable inside category object to be received
  const { name, quantity, imageUrl, price } = cartItem
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}
