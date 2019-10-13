export default {
	items: [
		{
			name: 'Dashboard',
			url: '/dashboard',
			icon: 'icon-speedometer',
			badge: {
				variant: 'info'
				// text: 'NEW',
			}
		},
		/*{
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },*/
		{
			name: 'Users',
			url: '/admin/users',
			icon: 'icon-user'
		},
		{
			name: 'Orders',
			url: '/admin/orders',
			icon: 'icon-basket-loaded'
		},
		/*{
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },*/

		// {
		// name: 'Base',
		//url: '/base',
		//icon: 'icon-puzzle',
		//children: [
		{
			name: 'Sales',
			url: '/admin/sales',
			icon: 'icon-wallet'
		},

		{
			name: 'Notifications',
			url: '/notifications',
			icon: 'icon-bell',
			children: [
				{
					name: 'Alerts',
					url: '/notifications/alerts',
					icon: 'icon-bell'
				},
				{
					name: 'Badges',
					url: '/notifications/badges',
					icon: 'icon-bell'
				},
				{
					name: 'Modals',
					url: '/notifications/modals',
					icon: 'icon-bell'
				}
			]
		},
		/*{
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },*/
		{
			divider: true
		},
		/*{
      title: true,
      name: 'Extras',
    },*/
		//{
		//name: 'Pages',
		//url: '/pages',
		// icon: 'icon-star',
		// children: [
		{
			name: 'Login',
			url: '/login',
			icon: 'icon-star'
		},
		{
			name: 'Register',
			url: '/register',
			icon: 'icon-star'
		}
		/*{
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },*/
		// ],
		// },
		/*{
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },*/
		/*{
      name: 'Download CoreUI',
      url: 'https://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Try CoreUI PRO',
      url: 'https://coreui.io/pro/react/',
      icon: 'icon-layers',
      variant: 'danger',
      attributes: { target: '_blank', rel: "noopener" },
    },*/
	]
};
