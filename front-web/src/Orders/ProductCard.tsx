import { formatPrice } from './helpers';
import { Product } from './types';

type Props = {
    products: Product;
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}

function ProductCard({ products, onSelectProduct, isSelected }: Props) {
    return (
     <div  className={`order-card-container ${isSelected ? 'selected' : ''}`} 
        onClick={() => onSelectProduct(products)}>
      
        <h3 className="order-card-title">
            {products.name}
         </h3>
         <img src={products.imageUri} 
          className="order-card-image" 
          alt={products.name}
          />
         <h3 className="order-card-price">
             {formatPrice(products.price)}
         </h3>
          <div className="order-card-description">
            {products.description}
            <p>
            {products.description}
            </p>
          </div>
     </div>
    )
}

export default ProductCard;