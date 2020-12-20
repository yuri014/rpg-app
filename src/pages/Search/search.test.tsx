import React from 'react';
import { shallow } from 'enzyme';

import SearchPage from '.';
import findByTestAttribute from '../../tests/utils';

test('renders without error', () => {
  const wrapper = shallow(<SearchPage />);
  const searchPageComponent = findByTestAttribute(wrapper, 'search-page');
  expect(searchPageComponent.length).toBe(1);
});
