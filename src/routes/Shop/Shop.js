import { useContext } from 'react'

import ProductCard from '../../Components/product-card/Product-card'

import { ProductsContext } from '../../context/products.context'

import './shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext)

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop
