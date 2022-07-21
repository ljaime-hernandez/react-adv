// ProductCard HighOrderComponent to differentiate it from a normal component
import { ProductCard as ProductCardHOC } from './ProductCard';
// import each of our card components for it to have a component 'interface'
// which will allow us to both require the programmer to include the required
// information and for the code to be versatile when modifying each element on it
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
export { ProductButtons } from './ProductButtons';
// will replicate as ProductCard.Title, etc. used to both refactor our code and 
// allow for different modifications
export const ProductCard = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
}); 

export default ProductCard;

