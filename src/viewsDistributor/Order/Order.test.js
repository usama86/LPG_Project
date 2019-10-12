import React from 'react';
import Order from './Order';
import { mount } from 'enzyme';

it('renders without crashing', () => {
	mount(<Order />);
});
