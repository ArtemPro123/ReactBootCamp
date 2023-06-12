import { render, screen } from '@testing-library/react';
import ProductDisplay, {ProductDisplayProps} from '../ProductDisplay';
import {Products} from '../DummyInventory';

let pdProps: ProductDisplayProps = {product:Products[2]};
render(<ProductDisplay {...pdProps}/>);

describe('ProductDisplay, passed a product, displays the product and its warehouses',
 () => {
  const pwId = screen.queryByText(/Id:/);
  it('is displaying a product', () => {
  expect(pwId).toBeTruthy();
  });

  const pwProd = screen.queryByText(/387/);
  it('is displaying the correct product', () => {
  expect(pwProd).toBeTruthy();
});
 });