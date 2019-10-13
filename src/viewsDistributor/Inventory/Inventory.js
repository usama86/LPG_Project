import React, { Component } from 'react';
import MaterialTable from 'material-table';
import './Inventory.css';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Inventory extends Component {
	state = {
		ModalTitle: '',
		userName: '',
		userType: '',
		userStatus: '',
		modal: false,

		columns: [
			{
				title: 'Product ID',
				field: 'id',
				type: 'numeric',
				cellStyle: {
					color: 'white'
				}
			},
			{
				title: 'Product Name',
				field: 'product',
				cellStyle: {
					color: 'white'
				}
			},
			{
				title: 'Rate',
				field: 'rate',
				type: 'numeric',
				cellStyle: {
					color: 'white'
				}
			},
			{
				title: 'Quantity',
				field: 'qty',
				type: 'numeric',
				cellStyle: {
					color: 'white'
				}
			},
			{
				title: 'Amount',
				field: 'amount',
				type: 'numeric',
				cellStyle: {
					color: 'white'
				}
			},
			{
				title: 'Discount',
				field: 'discount',
				type: 'numeric',
				cellStyle: {
					color: 'white'
				}
			},
			{
				title: 'Total',
				field: 'total',
				type: 'numeric',
				cellStyle: {
					color: 'white'
				}
			},
			{
				title: 'Month',
				field: 'month',
				cellStyle: {
					color: 'white'
				}
			},
			{
				title: 'Year',
				field: 'year',
				cellStyle: {
					color: 'white'
				}
			}
		],
		data: [
			{
				id: 1000,
				product: 'LPG1',
				rate: 1800,
				qty: 10,
				amount: 18000,
				discount: 1000,
				total: 17000,
				month: 'JANUARY',
				year: '2019'
			},
			{
				id: 1001,
				product: 'LPG2',
				rate: 1900,
				qty: 11,
				amount: 20900,
				discount: 900,
				total: 20000,
				month: 'FEBRUARY',
				year: '2019'
			},
			{
				id: 1002,
				product: 'LPG3',
				rate: 2000,
				qty: 12,
				amount: 24000,
				discount: 3000,
				total: 21000,
				month: 'MARCH',
				year: '2019'
			},
			{
				id: 1004,
				product: 'LPG4',
				rate: 2100,
				qty: 5,
				amount: 10500,
				discount: 500,
				total: 10000,
				month: 'APRIL',
				year: '2019'
			},
			{
				id: 1005,
				product: 'LPG5',
				rate: 1500,
				qty: 2,
				amount: 3000,
				discount: 0,
				total: 3000,
				month: 'MAY',
				year: '2019'
			},
			{
				id: 1006,
				product: 'LPG6',
				rate: 1400,
				qty: 6,
				amount: 8400,
				discount: 400,
				total: 8000,
				month: 'JUNE',
				year: '2019'
			}
		]
	};

	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col xs="12">
						<MaterialTable
							onRowClick={this.toggle}
							title="Sales Report"
							icons="ADD"
							columns={this.state.columns}
							data={this.state.data}
							style={{ backgroundColor: 'rgba(47,53,58,0.2)', fontWeight: 'bold' }}
							options={{
								pageSize: 10,
								headerStyle: {
									backgroundColor: '#18262E',
									color: 'white'
								},
								searchFieldStyle: {
									color: 'black',
									// background:"green !important",
									paddingTop: '1%'
								},
								searchFieldAlignment: 'right',
								rowStyle: (x) => {
									if (x.tableData.id % 2) {
										return { backgroundColor: '#18262E', cursor: 'pointer' };
									} else {
										return { backgroundColor: '#24343d', cursor: 'pointer' };
									}
								},
								actionsCellStyle: {
									display: 'none'
								},
								actionsColumnIndex: {
									display: 'none'
								},
								cellStyle: {
									color: 'white'
								},
								filterCellStyle: {
									color: 'white'
								},
								paginationType: {
									color: 'white'
								},
								columnsButton: {
									display: false
								},
								loadingType: 'overlay'
							}}
							editable={{
								onRowAdd: (newData) =>
									new Promise((resolve) => {
										setTimeout(() => {
											resolve();
											const data = [ ...this.state.data ];
											data.push(newData);
											this.setState({ ...this.state, data });
										}, 600);
									}),
								onRowUpdate: (newData, oldData) =>
									new Promise((resolve) => {
										setTimeout(() => {
											resolve();
											const data = [ ...this.state.data ];
											data[data.indexOf(oldData)] = newData;
											this.setState({ ...this.state, data });
										}, 600);
									}),
								onRowDelete: (oldData) =>
									new Promise((resolve) => {
										setTimeout(() => {
											resolve();
											const data = [ ...this.state.data ];
											data.splice(data.indexOf(oldData), 1);
											this.setState({ ...this.state, data });
										}, 600);
									})
							}}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}
export default Inventory;

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
