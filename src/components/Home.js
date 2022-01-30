import React from "react";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  // CartState is the context that was exported in Context component
  // We were initiallt using the products directly from the CartState
  // const { state: { products } } = CartState();
  // but to make the Filters work, we created a new function:

  const {
    state: { products },
    prodState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  console.log(products);

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    
    // byStock is false by default, but the filter is for including the ones
    // out of stock too, so what we do here is we filter all the products to
    // just the ones that are inStock ( inStock is not 0 )
    // This means these following lines will be triggered when the app starts
    // because the if statement is saying:
    // if(true) {...} and the only way this happens is if byStock is false
    // but remember that it is false by default
    // so in order to see all of the original products, the condition has to
    // be false and that happens when clicking the stock filter.
    // In that way, these lines will not run and we'll have the full list of
    // products
  
    if (!byStock) {
      sortedProducts = sortedProducts.filter((p) => p.inStock);
      //console.log("Inside this")
      // console.log(sortedProducts)
    }
    
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((p) => p.fastDelivery);
    }
    
    if (byRating) {
      sortedProducts = sortedProducts.filter((p) => p.ratings >= byRating);
    }
    
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((p) => p.name.toLowerCase().includes(searchQuery));
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((p) => (
          <SingleProduct product={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
