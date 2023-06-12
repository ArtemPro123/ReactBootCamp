import {Products, DummyProduct} from './DummyInventory';
import {Product} from './WarehouseTypes';
import ProductDisplay, {ProductDisplayProps} from './ProductDisplay';
import {useState} from 'react';

const ProductWarehouse = ():JSX.Element => {
  const [selectedProps, setSelectedProps] = useState<ProductDisplayProps>({product:DummyProduct});
  const showProduct = (e:React.ChangeEvent<HTMLSelectElement>) => {if (e.target.value !== 'n/a')
  {
   let index:number = Products.findIndex(
   p => p.productId.toString() === e.target.value);
   if (index !== -1){
    setSelectedProps({product: Products[index]});
  }
  }};

  return (
    <div className="container textprimary">
      <h2>Products</h2>
      <select  data-testid='productSelect' onChange={showProduct}>
        <option value='n/a' >
          Select a Product
        </option>
        {Products.map((prod:Product) => {
          return (
            <option value={prod.productId} key={prod.productId}>
              {prod.productName}
            </option>
          )
        })}
      </select>
      <br/>{ selectedProps.product.productId !== -1 ? <ProductDisplay {...selectedProps} />
 : null } 
    </div>
  );
}

export default ProductWarehouse;
