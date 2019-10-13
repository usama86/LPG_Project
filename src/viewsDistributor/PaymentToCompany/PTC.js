import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import './PTC.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PTC extends Component {
	state = {
		ModalTitle: '',
		userName: '',
		userType: '',
		userStatus: '',
		modal: false,

		columns: [
			{
				title: 'Order ID',
				field: 'oid',
				type: 'numeric',
				cellStyle: {
					color: 'white'
				}
			},

			{
				title: 'Amount Recieved',
				field: 'Arecieved',
				type: 'numeric',
				cellStyle: {
					color: 'white'
				}
			},
			{
				title: 'Pay To Company',
				field: 'ptc',
				type: 'numeric',
				cellStyle: {
					color: 'white'
				}
			},
			{
				title: 'date',
				field: 'rd',
				cellStyle: {
					color: 'white'
				}
			}
		],
		data: [
			{
				oid: 1,
				Arecieved: 500,
				ptc: 200,
				rd: '4/5/2019'
			},
			{
				oid: 2,
				Arecieved: 700,
				ptc: 100,
				rd: '14/6/2019'
			},
			{
				oid: 3,
				Arecieved: 1500,
				ptc: 1200,
				rd: '22/6/2019'
			},
			{
				oid: 4,
				Arecieved: 5500,
				ptc: 2300,
				rd: '24/2/2019'
			}
		]
	};

	toggle = (row, columns, event) => {
		console.log(row);
		console.log(columns);
		console.log(event);
		//         alert(row);
		// console.log(columns.latestPost);
		//console.log(columns._id);
		this.setState({ userName: columns.fname, userType: columns.type, userStatus: columns.status });
		var x = this.state.modal;
		this.setState({ modal: !x });
	};

	cancelModal = () => {
		var x = this.state.modal;
		this.setState({ modal: !x });
	};

	render() {
		let showbutton;
		if (this.state.userType === 'Customer' && this.state.userStatus === 'Approved') {
			showbutton = (
				<div>
					<Button color="danger"> Ban</Button>
					<Button color="secondary" onClick={this.cancelModal}>
						Cancel
					</Button>
				</div>
			);
		} else if (this.state.userType === 'Customer' && this.state.userStatus === 'Not Approved') {
			showbutton = (
				<div>
					<Button color="primary"> Approve</Button>
					<Button color="danger"> Ban</Button>
					<Button color="secondary" onClick={this.cancelModal}>
						Cancel
					</Button>
				</div>
			);
		} else if (this.state.userType === 'Distributor' && this.state.userStatus === 'Approved') {
			showbutton = (
				<div>
					<Button color="danger"> Ban</Button>
					<Button color="success">Generate invoice</Button>
					<Button color="secondary" onClick={this.cancelModal}>
						Cancel
					</Button>
				</div>
			);
		} else if (this.state.userType === 'Distributor' && this.state.userStatus === 'Not Approved') {
			showbutton = (
				<div>
					<Button color="primary"> Approve</Button>
					<Button color="danger"> Ban</Button>
					<Button color="success">Generate invoice</Button>
					<Button color="secondary" onClick={this.cancelModal}>
						Cancel
					</Button>
				</div>
			);
		}

		return (
			<div>
				<MaterialTable
					onRowClick={this.toggle}
					title="Users"
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
						}
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

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.cancelModal}>{this.state.userName}</ModalHeader>
					<ModalBody>Pay the bill</ModalBody>
					<Button color="success">Pay To Company</Button>
				</Modal>
			</div>
		);
	}
}
export default PTC;

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
