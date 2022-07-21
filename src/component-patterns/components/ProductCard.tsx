import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

// we create a context in here so we can use the Provider component, which will help us out 
// to access several pieces of information from a HOC, a component which will oversee the rest
// of its child components and provide with different properties as designed
export const ProductContext = createContext({} as ProductContextProps);
// simple destructured component for easy and clean access
const { Provider } = ProductContext;

export const ProductCard = ({ product }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct(0);

  return (
    // we design the component so it must receive a fallback value, in this case it will be an object composed
    // of the exported elements of the custom hook, along with the product object declared in the interface file
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>

      {/* we declare a container with custom styles from our styles folder, it will include several
          components which belongs to the same ProductCard, but the declaration of each element was done
          separately as an example for refactoring a whole component along with its interfaces and properties.
          some components are given an argument for it to be tested, but each of them has different conditions
          for them to display information accordingly in case theres no real argument being passed. */}
      <div className={ styles.productCard }>

          <ProductImage img={ product.img }/>

          <ProductTitle title={ product.title }/>

          <ProductButtons/>
          
      </div>

    </Provider>
  )
}

// the code below is declared so we can use it as an option for future programmers which want to modify
// specific components on our code, more info can be found in the ShoppingPage component
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;