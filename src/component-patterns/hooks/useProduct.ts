import { useState } from "react"

export const useProduct = (value:number) => {

    // simple custom hook used to test a compound component pattern design with a counter
    // which can be increased or decreased to no less than zero
    const [counter, setCounter] = useState(value);  

    const increaseBy = (value:number) => {
      setCounter( prev => Math.max( prev + value, 0))
    };
  
    return {
        counter,
        increaseBy
    }
}