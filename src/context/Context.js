import React, { createContext, useContext, useReducer } from 'react';
import faker from 'faker';
import { cartReducer } from './Reducers';

const cartContext = createContext();

const Context = ({children}) => {
  //https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  const products = [...Array(20)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 1, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  //const [state, dispatch] = useReducer(reducer, initialArgs, init)
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  });

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  )
}

// Here we are exporting the component called Context, to pass down
// the state and the dispatch from the cartReducer. 

export default Context;

// But eventhough we are exporting the component called Context, we need
// to export the context itself, and for that, we need to use useContext

export const CartState = () => {
  return useContext(cartContext);
}
