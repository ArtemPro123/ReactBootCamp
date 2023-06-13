import isofetch from 'isomorphic-fetch';
import { Product } from '../WarehouseTypes';

export const getProducts = async ():Promise<Array<Product>>=> {
  try{
    let response:Response = await isofetch(
      'http://localhost/WarehouseTree/ProductManagement/products/');
     if (response.ok) {
      return await response.json();
     } else {
      throw new Error(response.statusText);
     }
  }
  catch(err){
    if (typeof(err) == 'string')  {
      throw new Error(err);
    }  throw new Error(typeof(err));
  }
}


export const deleteProduct = async (prodId:number):Promise<Product> => {
  try {
    let response:Response = await isofetch('http://localhost/WarehouseTree/ProductManagement/products/' + prodId.toString(), {
      method: 'delete'
      }
  );
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }

 } catch (err) {
  if (typeof(err) == 'string') {
    throw new Error(err);
    } throw new Error(typeof(err));
 }

}