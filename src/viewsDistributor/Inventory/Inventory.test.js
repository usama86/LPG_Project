import React from 'react';
import Inventory from './Inventory';
import { mount } from 'enzyme';

it('renders without crashing', () => {
	mount(<Inventory />);
});
