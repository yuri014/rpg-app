import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Landing from '../../pages/Landing';
import findByTestAttribute from '../utils/index';

Enzyme.configure({ adapter: new Adapter() });

test('renders without error', () => {
  const wrapper = shallow(<Landing />);
  const landingPage = findByTestAttribute(wrapper, 'landing-page');
  expect(landingPage.length).toBe(1);
});
