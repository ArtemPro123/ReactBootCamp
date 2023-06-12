import {Product} from './WarehouseTypes';
import WarehouseDisplay, {WarehouseDisplayProps} from './WarehouseDisplay';
import {DummyWarehouse} from './DummyInventory';


const ProductDisplay = ({product}:ProductDisplayProps):JSX.Element => { 
  let wProps: WarehouseDisplayProps =  {warehouse: DummyWarehouse};
  let totalQoh: number = 0;
  return(<>
    <h3>Product: {product.productName}</h3>
    <label className='text-secondary'>Id:</label>
    {product.productId}
    <br/>
    <label className='text-secondary'>Last Delivery:</label>
    {product.lastDelivery?.toString()}
    <br/>
    <br/>
    <h4>Warehouses</h4>
    {
    product.warehouses.map(w => {
    wProps.warehouse = w;
    totalQoh += w.qoh;
    return ( <WarehouseDisplay {...wProps} key={w.warehouseId}/> );
    })
    }
    <label className="text-secondary">Total Quantity on Hand:&nbsp;</label>{totalQoh}
      </>
      );
    };
 export type ProductDisplayProps = {
  product: Product
 }
 export default ProductDisplay;
 