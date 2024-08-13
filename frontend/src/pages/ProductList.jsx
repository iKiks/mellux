import React, { useEffect, useState } from 'react'
import NavbarLoggedIn from './NavbarLoggedIn'
import api from '../api'
import ProductCard from './ProductCard'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductList()
  }, [])
  
  const getProductList = () => {
    api.get('/api/products/')
      .then((res) => res.data)
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
      
  }
  console.log(products)

  return (
    <>
      <NavbarLoggedIn />
      <div className="product-list">
        {products.map((item, id) => (
          <ProductCard key={id} product={item} />
        ))}
      </div>
    </>
  )
}

export default ProductList