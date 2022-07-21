import { useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export const ProductTitle  = ({ title }: { title?:string }) => {

    // uses the product in the context to retrieve its title, but it will
    // give priority to the title string if passed from the parent component, if
    // it is not existent then it will use the product title instead, this being so 
    // any other programmer re-formatting the code can modify the components on the
    // ProductCard
    const { product } = useContext(ProductContext);
  
    return (
      <span className={ styles.productDescription }>
        { title ? title : product.title } 
      </span>
    )
  }