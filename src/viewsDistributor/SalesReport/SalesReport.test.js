import React from 'react';
import SalesReport from './SalesReport';
import { mount } from 'enzyme';

it('renders without crashing', () => {
	mount(<SalesReport />);
});
