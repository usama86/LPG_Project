import React from 'react';

const Transactions = React.lazy(() => import('./views/Base/Cards'));// chnaged this
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const users = React.lazy(() => import('./views/Theme/Colors')); //chnaged this
const orders = React.lazy(() => import('./views/Theme/Typography')); //changed this
const sales = React.lazy(() => import('./views/Base/Breadcrumbs')); //changed this
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

const DistributorDash = React.lazy(() => import('./viewsDistributor/Dashboard/Dashboard'));
const DistributorInven = React.lazy(() => import('./viewsDistributor/Inventory/Inventory'));
const DistributorOrder = React.lazy(() => import('./viewsDistributor/Order/Order'));
const DistributorProfile = React.lazy(() => import('./viewsDistributor/Profile/Profile'));
const DistributorSalesReport = React.lazy(() => import('./viewsDistributor/SalesReport/SalesReport'));
const DistributorPTC = React.lazy(() => import('./viewsDistributor/PaymentToCompany/PTC'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
	{ path: '/', exact: true, name: 'Home' },

	{ path: '/distributor/dashboard', name: 'Dashboard', component: DistributorDash },
	{ path: '/distributor/Inventory', name: 'Dashboard Inventory', component: DistributorInven },
	{ path: '/distributor/orders', name: 'Distributor Order', component: DistributorOrder },

	{ path: '/distributor/users', name: 'Profile', component: DistributorProfile },
	{ path: '/distributor/sales', name: 'Sales Report', component: DistributorSalesReport },
	{ path: '/distributor/paymentToCompany', name: 'Payment To Company', component: DistributorPTC },

	{ path: '/Dashboard', name: 'Dashboard', component: Dashboard },
	{ path: '/users', exact: true, name: 'Theme', component: users },
	{ path: '/admin/users', name: 'Users', component: users }, //changed this
	{ path: '/admin/orders', name: 'Orders', component: orders }, //changed this
	{ path: '/base', exact: true, name: 'Base', component: Transactions },
	{ path: '/admin/transactions', name: 'Transactions', component: Transactions },//changed this
	{ path: '/base/forms', name: 'Forms', component: Forms },
	{ path: '/base/switches', name: 'Switches', component: Switches },
	{ path: '/base/tables', name: 'Tables', component: Tables },
	{ path: '/base/tabs', name: 'Tabs', component: Tabs },
	{ path: '/admin/sales', name: 'Sales', component: sales }, //changed this
	{ path: '/base/carousels', name: 'Carousel', component: Carousels },
	{ path: '/base/collapses', name: 'Collapse', component: Collapses },
	{ path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
	{ path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
	{ path: '/base/list-groups', name: 'List Groups', component: ListGroups },
	{ path: '/base/navbars', name: 'Navbars', component: Navbars },
	{ path: '/base/navs', name: 'Navs', component: Navs },
	{ path: '/base/paginations', name: 'Paginations', component: Paginations },
	{ path: '/base/popovers', name: 'Popovers', component: Popovers },
	{ path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
	{ path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
	{ path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
	{ path: '/buttons/buttons', name: 'Buttons', component: Buttons },
	{ path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
	{ path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
	{ path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
	{ path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
	{ path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
	{ path: '/icons/flags', name: 'Flags', component: Flags },
	{ path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
	{ path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
	{ path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
	{ path: '/notifications/alerts', name: 'Alerts', component: Alerts },
	{ path: '/notifications/badges', name: 'Badges', component: Badges },
	{ path: '/notifications/modals', name: 'Modals', component: Modals },
	{ path: '/widgets', name: 'Widgets', component: Widgets },
	{ path: '/charts', name: 'Charts', component: Charts },
	{ path: '/users', exact: true, name: 'Users', component: Users },
	{ path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
