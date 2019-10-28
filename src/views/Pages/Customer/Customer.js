import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import './Customer.css';
import TextField from '@material-ui/core/TextField';
import Header from '../Header/Header';
class Customer extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className='searchDiv'>
					<span>It's the LPG YOU LOVE M8</span>
					<br />
					<TextField
						id="outlined-full-width"
						label="Address"
						style={{ margin: 8 }}
						placeholder="Enter your address hee"
						margin="normal"
						variant="outlined"
						InputLabelProps={{
							shrink: true
						}}
					/>
				</div>
			</div> 
		);
	}
}

export default Customer;

/*
<div className="app flex-row align-items-center">
					<Container>
						<Row className="justify-content-center">
							<Col md="6">
								<div className="clearfix">
									<h4 className="pt-3">Customer Panel.</h4>
									<button
										onClick={() => {
											this.props.history.push('/dashboard');
											localStorage.setItem('UserType', 'Admin');
										}}
									>
										GO to ADMIN
									</button>
									<button
										onClick={() => {
											this.props.history.push('/distributor/dashboard');
											localStorage.setItem('UserType', 'Vendor');
										}}
									>
										Go TO VENDOR
									</button>
								</div>
							</Col>
						</Row>
					</Container>
				</div> 


 */
