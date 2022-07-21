import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { ProductCard } from '../components/ProductCard';

// the product is declared individually in here as we created an interface for the ProductCard which requires
// the same elements as declared in this object. 
const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        {/* these styles are declared just so we can see how different cards would be seen if we design more than
            one of them */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

          {/* both examples in here are designed so we can see different approaches with the same result, in the first
              one we add different components to our ProductCard as attributes, this will help the programmer understand
              the relationship between the HOC and the children components, which in this case are in a direct relationship*/}
          <ProductCard product={ product }>
            <ProductCard.Title/>
            <ProductCard.Image/>
            <ProductCard.Buttons/>
          </ProductCard>
          {/* this second example uses children components which are directly related to the ProductCard component, but the
              relationship seems indirect, this is done so the programmer have more freedom when modifying the code if he were
              to be denied access to extra parts of the code */}
          <ProductCard product={ product }>
            <ProductTitle/>
            <ProductImage/>
            <ProductButtons/>
          </ProductCard>

        </div>
    </div>
  )
}

export default ShoppingPage;