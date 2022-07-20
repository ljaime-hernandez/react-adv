import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { ProductCard } from '../components/ProductCard';

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
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

          <ProductCard product={ product }>
            <ProductCard.Title/>
            <ProductCard.Image/>
            <ProductCard.Buttons/>
          </ProductCard>

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