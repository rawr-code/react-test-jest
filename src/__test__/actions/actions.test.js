import actions from '../../actions';
import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('addToCart Action', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };

    expect(actions.addToCart(payload)).toEqual(expected);
  });
  test('REMOVE_FROM_CART', () => {
    const initialState = { cart: [ProductMock] };
    const action = { type: 'REMOVE_FROM_CART', payload: ProductMock };
    const expected = { cart: [] };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
