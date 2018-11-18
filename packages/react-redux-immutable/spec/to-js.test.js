import { List } from 'immutable';
import { mapComponentProps } from '../src/to-js';

describe('mapComponentProps', () => {
  test('does not break on empty call', () => {
    expect(mapComponentProps()).toEqual({});
  });

  test('converts immutable list', () => {
    expect(
      mapComponentProps({
        pets: List(['La Stoune', 'Bibou']),
      }),
    ).toEqual({
      pets: ['La Stoune', 'Bibou'],
    });
  });

  test('does not convert string', () => {
    expect(
      mapComponentProps({
        name: 'Thibault',
      }),
    ).toEqual({
      name: 'Thibault',
    });
  });

  test('converts mixed props', () => {
    expect(
      mapComponentProps({
        name: 'Thibault',
        pets: List(['La Stoune', 'Bibou']),
      }),
    ).toEqual({
      name: 'Thibault',
      pets: ['La Stoune', 'Bibou'],
    });
  });

  test('ignores props from blacklist', () => {
    expect(
      mapComponentProps(
        {
          name: 'Thibault',
          pets: List(['La Stoune', 'Bibou']),
        },
        ['pets'],
        true,
      ),
    ).toEqual({
      name: 'Thibault',
      pets: List(['La Stoune', 'Bibou']),
    });
  });
  test('defaults to blacklist', () => {
    expect(
      mapComponentProps(
        {
          name: 'Thibault',
          pets: List(['La Stoune', 'Bibou']),
        },
        ['pets'],
      ),
    ).toEqual({
      name: 'Thibault',
      pets: List(['La Stoune', 'Bibou']),
    });
  });
  test('converts props from whitelist', () => {
    expect(
      mapComponentProps(
        {
          name: 'Thibault',
          pets: List(['La Stoune', 'Bibou']),
          family: List(['Toto', 'Tata']),
        },
        ['pets'],
        false,
      ),
    ).toEqual({
      name: 'Thibault',
      pets: ['La Stoune', 'Bibou'],
      family: List(['Toto', 'Tata']),
    });
  });
});
