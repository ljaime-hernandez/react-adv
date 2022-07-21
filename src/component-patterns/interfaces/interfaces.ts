import { ReactElement } from "react";

// the Properties on the Product card are designed so it can either have one or more
// components inside of it, but it must have a product
export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
  }
  
// the product interface is designed so the product demands an id and title attributes,
// the img attribute is not mandatory and the proper ProductImage coding must be versatile
// enough to either receive or not an img attribute
export interface Product {
    id: string;
    title: string;
    img?: string;
  }

// the ProductContext properties interface is used to include the same attributes exported
// from the useProduct hook, and its values must match the ones being exported from it. The counter
// value is a number, the increaseBy function must be declared with the specific argument it receives
// as in the custom hook, and the product is the object used as example for this lesson
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
  }