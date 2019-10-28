import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
class Header extends Component {
	state = {
		auth: true,
		anchorEl: false
	};

	open = Boolean(this.state.anchorEl);

	handleChange = (event) => {
		this.setState({ auth: true });
	};

	handleMenu = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		return (
			<div>
				<AppBar
					position="static"
					style={{
						background: 'white',
						borderBottomStyle: 'solid',
						borderBottomColor: 'black',
						borderBottomWidth: '1px'
					}}
				>
					<Toolbar>
						<img src={require('../../../viewsDistributor/img/logo.png')} style={{ width: '267px' }} />
						<Typography style={{ paddingLeft: '72%', color: 'black' }} variant="h6">
							Ali
						</Typography>
						{this.state.auth && (
							<div>
								<IconButton
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={this.handleMenu}
									color="black"
								>
									<AccountCircle />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={this.state.anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									open={Boolean(this.state.anchorEl)}
									onClose={this.handleClose}
								>
									<MenuItem onClick={this.handleClose}>Profile</MenuItem>
									<MenuItem onClick={this.handleClose}>My account</MenuItem>
								</Menu>
							</div>
						)}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
export default Header;
