import React, { Component } from 'react';
import './Profile.css';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

class Profile extends Component {
	render() {
		return (
			<div>
				<React.Fragment>
					<CssBaseline />
					<Container
						fixed
						style={{
							background: 'white',
							marginLeft: '37px',
							width: '94%'
						}}
					>
						<Grid
							container
							alignItems="center"
							style={{
								borderBottomStyle: 'solid',
								color: '#20A8D8',
								borderBottomWidth: 'thin'
							}}
						>
							<div style={{ display: 'flex' }}>
								<div>
									<Avatar
										alt="Remy Sharp"
										style={{
											margin: '10px',
											width: '152px',
											height: '152px',
											cursor: 'pointer'
										}}
										src={require('../img/sad.jpg')}
									/>
								</div>
								<div style={{ paddingLeft: '30%', paddingTop: '5%' }}>
									<div>
										<span style={{ fontSize: '30px', whiteSpace: 'nowrap', color: 'black' }}>
											Yasir Distributor
										</span>
									</div>

									<span
										style={{
											color: '#20A8D8',
											cursor: 'pointer',
											paddingLeft: '3px',
											whiteSpace: 'nowrap',
											fontSize: '19px'
										}}
									>
										Yasir@gmail.com{' '}
									</span>
									<span style={{ color: 'grey', whiteSpace: 'nowrap', fontSize: '19px' }}>
										{' '}
										- Distributor
									</span>
									<br />
									<Box
										component="fieldset"
										mb={3}
										borderColor="transparent"
										style={{ cursor: 'pointer' }}
									>
										<Typography component="legend" style={{ paddingLeft: '5px', color: 'grey' }}>
											Rating
										</Typography>
										<Rating value={4} style={{ paddingLeft: '3px' }} readOnly />
									</Box>
								</div>
							</div>
						</Grid>

						<div style={{ paddingTop: '4%' }}>
							<span style={{ fontSize: '25px', paddingLeft: '2%' }}>Account</span>
							<div style={{ paddingLeft: '2%' }}>
								<div style={{ paddingTop: '4%', color: 'gray' }}>
									<TextField
										id="standard-full-width"
										label="UserName"
										style={{ margin: 8 }}
										placeholder="Enter username here"
										/*			helperText="Full width!" */
										fullWidth
										margin="normal"
										InputLabelProps={{
											shrink: true
										}}
									/>
								</div>
								<div style={{ paddingTop: '4%', color: 'gray' }}>
									<TextField
										id="standard-full-width"
										label="Email"
										style={{ margin: 8 }}
										placeholder="Enter email here"
										/*			helperText="Full width!" */
										fullWidth
										margin="normal"
										InputLabelProps={{
											shrink: true
										}}
									/>
								</div>
								<div style={{ paddingTop: '4%', color: 'gray' }}>
									<TextField
										id="standard-full-width"
										label="Password"
										style={{ margin: 8 }}
										placeholder="Enter password here"
										/*			helperText="Full width!" */
										fullWidth
										margin="normal"
										InputLabelProps={{
											shrink: true
										}}
									/>
								</div>
								<div style={{ paddingTop: '4%', color: 'gray' }}>
									<TextField
										id="standard-full-width"
										label="Distributor Name"
										style={{ margin: 8 }}
										placeholder="Enter distributor name here"
										/*			helperText="Full width!" */
										fullWidth
										margin="normal"
										InputLabelProps={{
											shrink: true
										}}
									/>
								</div>
								<div style={{ paddingTop: '4%', color: 'gray' }}>
									<TextField
										id="standard-full-width"
										label="Phone No"
										style={{ margin: 8 }}
										placeholder="Enter phone no here"
										/*			helperText="Full width!" */
										fullWidth
										margin="normal"
										InputLabelProps={{
											shrink: true
										}}
									/>
								</div>
								<div style={{ paddingTop: '4%', color: 'gray' }}>
									<TextField
										id="standard-full-width"
										label="Address"
										style={{ margin: 8 }}
										placeholder="Enter address here"
										/*			helperText="Full width!" */
										fullWidth
										margin="normal"
										InputLabelProps={{
											shrink: true
										}}
									/>
								</div>
								<Button
									variant="contained"
									color="primary"
									size="large"
									style={{
										marginLeft: '90%',
										marginTop: '12px',
										marginBottom: '47px'
									}}
									startIcon={<SaveIcon />}
								>
									Save
								</Button>
							</div>
						</div>
					</Container>
				</React.Fragment>
			</div>
		);
	}
}
export default Profile;

/*class ThemeColor extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {

    // const { className, children, ...attributes } = this.props
    const { className, children } = this.props

    const classes = classNames(className, 'theme-color w-75 rounded mb-3')

    return (
      <Col xl="2" md="4" sm="6" xs="12" className="mb-4">
        <div className={classes} style={{paddingTop: '75%'}}></div>
        {children}
        <ThemeView/>
      </Col>
    )
  }
}

class Colors extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> Theme colors
          </div>
          <div className="card-body">
            <Row>
              <ThemeColor className="bg-primary">
                <h6>Brand Primary Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-secondary">
                <h6>Brand Secondary Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-success">
                <h6>Brand Success Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-danger">
                <h6>Brand Danger Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-warning">
                <h6>Brand Warning Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-info">
                <h6>Brand Info Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-light">
                <h6>Brand Light Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-dark">
                <h6>Brand Dark Color</h6>
              </ThemeColor>
            </Row>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> Grays
          </div>
          <div className="card-body">
            <Row className="mb-3">
              <ThemeColor className="bg-gray-100">
                <h6>Gray 100 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-200">
                <h6>Gray 200 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-300">
                <h6>Gray 300 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-400">
                <h6>Gray 400 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-500">
                <h6>Gray 500 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-600">
                <h6>Gray 600 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-700">
                <h6>Gray 700 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-800">
                <h6>Gray 800 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-900">
                <h6>Gray 900 Color</h6>
              </ThemeColor>
            </Row>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <i className="icon-drop"></i> Additional colors
          </div>
          <div className="card-body">
            <Row>
              <ThemeColor className="bg-blue">
                <h6>Blue Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-light-blue">
                <h6>Light Blue Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-indigo">
                <h6>Indigo Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-purple">
                <h6>Purple Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-pink">
                <h6>Pink Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-red">
                <h6>Red Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-orange">
                <h6>Orange Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-yellow">
                <h6>Yellow Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-green">
                <h6>Green Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-teal">
                <h6>Teal Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-cyan">
                <h6>Cyan Color</h6>
              </ThemeColor>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}*/
