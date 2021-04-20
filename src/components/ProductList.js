import React from 'react'
import Product from 'components/Product'

const ProductList = ({products}) => {

    const allProducts = products.map((prod) => <Product key={prod.id} data={prod} />)
  
    return (

        <section className="results">
            <h2 className="subheading">Results</h2>
            {allProducts}
        </section>

  )
}

export default ProductList