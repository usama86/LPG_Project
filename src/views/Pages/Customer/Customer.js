import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Customer extends Component {
	render() {
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="6">
							<div className="clearfix">
								<h4 className="pt-3">Customer Panel.</h4>
								<button
									onClick={() => {
										this.props.history.push('/dashboard');
									}}
								>
									GO to ADMIN
								</button>
								<button
									onClick={() => {
										this.props.history.push('/dashboardDist');
									}}
								>
									Go TO VENDOR
								</button>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Customer;
