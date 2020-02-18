import reducer from '../../reducers';
import ProducMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar initial State', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProducMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProducMock],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
