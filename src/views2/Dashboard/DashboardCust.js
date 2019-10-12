import React, { Component } from 'react';

class DashboardCust extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdownOpen: false,
			radioSelected: 2
		};
	}

	render() {
		return (
			<div className="animated fadeIn">
				<span>HI</span>
			</div>
		);
	}
}

export default DashboardCust;
