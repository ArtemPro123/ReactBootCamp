import WarehouseHeader from  './WarehouseApp/WarehouseHeader';
import ProductWarehouse from  './WarehouseApp/ProductWarehouse';
import WarehouseFooter, { WarehouseFooterProps } from './WarehouseApp/WarehouseFooter';
import {siteInfo} from './WarehouseApp/DummyInventory';


const UIRoot = ():JSX.Element => {
  let footerProps: WarehouseFooterProps = {
    contactEmail: siteInfo.ContactEmail,
    contactName: siteInfo.ContactName
    };
  return (
    <>
 <WarehouseHeader />
 <ProductWarehouse />
 <WarehouseFooter {...footerProps}> <div>&copy;2020 {siteInfo.SiteName}</div>

 </WarehouseFooter>
</>

    );
 }
 export default UIRoot;