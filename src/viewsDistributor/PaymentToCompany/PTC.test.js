import React from 'react';
import PTC from './PTC';
import { mount } from 'enzyme';

it('renders without crashing', () => {
	mount(<PTC />);
});
