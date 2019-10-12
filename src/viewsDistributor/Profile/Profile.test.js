import React from 'react';
import Profile from './Profile';
import { mount } from 'enzyme';

it('renders without crashing', () => {
	mount(<Profile />);
});
