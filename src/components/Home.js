import React from 'react'
import { CartState } from '../context/Context'
import Filters from './Filters';
import SingleProduct from './SingleProduct';

const Home = () => {

  const { state: { products } } = CartState();

  console.log(products);

  return (
    <div className="home">
      <Filters/>
      <div className="productContainer">
        {
          products.map((p) => 
              <SingleProduct product={p} key={p.id}/>
          )
        }
      </div>
    </div>
  )
}

export default Home;
