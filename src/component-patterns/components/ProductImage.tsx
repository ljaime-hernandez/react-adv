import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = '' }) => {

    // uses the context from our HOC to retrieve the product object, it has a default
    // value for the img attribute and different conditions for it to display an image
    // accordingly
    const { product } = useContext(ProductContext);
    let imgToShow: string;
  
    // if an image is received from the parent component, then the img string will be used,
    // if the image string is empty but the product in the context has an img string then
    // it will be used instead, if none of both conditions are true, then a default empty
    // image will be displayed
    if ( img ){
      imgToShow = img;
    } else if ( product.img ){
      imgToShow = product.img;
    } else {
      imgToShow = noImage;
    }
  
    return (
      <img className={ styles.productImg } src={ imgToShow } alt="Product Img"/>
    )
  }