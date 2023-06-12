import {Product, Warehouse} from './WarehouseTypes';
import {DummyWarehouse} from './DummyInventory';
import WarehouseDisplay, {WarehouseDisplayProps} from './WarehouseDisplay';
import { useEffect } from 'react';


const ProductDisplay = ({product}:ProductDisplayProps):JSX.Element => {
  let totalQoh: number = 0;
  

  useEffect( () => {
    document.title = 'Product: ' + product.productName;    
   }, [product.productName]);

  let wProps: WarehouseDisplayProps = {warehouse: DummyWarehouse};
  return (<>
              <h3 data-testid='productHeading'>Product: {product.productName}</h3>
              <label className="text-secondary">Id:</label> {product.productId}
              <br/>
              <label className="text-secondary">Last Delivery:</label> {product.lastDelivery?.toString()}
              <br/>
              <h4>Warehouses</h4>
              {
                product.warehouses.map((w:Warehouse) => {
                  totalQoh += w.qoh;
                  wProps.warehouse = w;                
                  return ( <WarehouseDisplay {...wProps} key={w.warehouseId}/> );
                })                
              }   
              <label className="text-secondary">Total Quantity on Hand:&nbsp;</label>{totalQoh}
            </>
         );
}

export type ProductDisplayProps = {
  product:Product;
}

export default ProductDisplay;