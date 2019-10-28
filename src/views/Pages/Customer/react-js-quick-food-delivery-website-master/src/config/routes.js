import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../screens/Home';
import RegisterRestaurant from '../screens/RegisterRestaurant';
import Login from '../screens/Login';
import Restaurants from '../screens/Restaurants';
import RestaurantDetails from '../screens/RestaurantDetails';
import AddMenuItems from '../screens/AddMenuItems';
import OrderRequests from '../screens/OrderRequests';
import MyOrders from '../screens/MyOrders';
import MyFoods from '../screens/MyFoods';

const customHistory = createBrowserHistory();

// Routes For Navigation
const MyRoutes = () => (
	<Router history={customHistory}>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/register-restaurant" component={RegisterRestaurant} />
			<Route path="/login" component={Login} />
			<Route path="/distributors" component={Restaurants} />
			<Route path="/restaurant-details" component={RestaurantDetails} />
			<Route path="/add-menu-items" component={AddMenuItems} />
			<Route path="/order-requests" component={OrderRequests} />
			<Route path="/my-orders" component={MyOrders} />
			<Route path="/my-foods" component={MyFoods} />
		</div>
	</Router>
);

export default MyRoutes;
