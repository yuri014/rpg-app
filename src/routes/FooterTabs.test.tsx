import React from 'react';
import { shallow } from 'enzyme';

import FooterTabs from './FooterTabs';
import findByTestAttribute from '../tests/utils';

test('renders withou error', () => {
  const wrapper = shallow(<FooterTabs />);
  const footerTabsComponents = findByTestAttribute(wrapper, 'footer-tabs');
  expect(footerTabsComponents.length).toBe(1);
});
