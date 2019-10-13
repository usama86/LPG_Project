import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col } from 'reactstrap'
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'
import MaterialTable from 'material-table';
import  './Colors.css';

class users extends Component {
 state = {

  columns: [
    { title: 'First Name', field: 'fname',cellStyle: {
              
                  color: 'white'
              }, },
    { title: 'Last Name', field: 'surname',cellStyle: {
                
                  color: 'white'
              }, },
    { title: 'Email', field: 'email',cellStyle: {
     
                  color: 'white'
              }, },
    { title: 'Password', field: 'password',cellStyle: {
   
                  color: 'white'
              }, },
    { title: 'Phone no', field: 'phoneno', type: 'numeric',cellStyle: {
     
                  color: 'white'
              }, },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric',cellStyle: {
     
                  color: 'white'
              }, },
    { title: 'Registered date', field: 'rd',cellStyle: {
  
                  color: 'white'
              }, },
    { title: 'ActiveStatus', field: 'status',cellStyle: {
                  color: 'white'
              }, },
  ],
  data: [
   
    {
      fname: 'Zerya Betül',
      surname: 'Baran',
      email:'zeryan@gmail.com',
      password:'zeryan123',
      phoneno:'051-2642148',
      birthYear: 1999,
      birthCity: 34,
      rd : '2019-5-14',
      status : 'Yes'
    },
    {
      fname: 'Ahsan',
      surname: 'Farooq',
      email:'ahsan@gmail.com',
      password:'ahsan123',
      phoneno:'051-5942178',
      birthYear: 1997,
      rd : '2017-2-2',
      status : 'Yes'
      
    },
  ],

 }

  render() {

    return (
      <div> 
              <MaterialTable
              title="Users"
              columns={this.state.columns}
              data={this.state.data}
              style={{backgroundColor:"rgba(47,53,58,0.2)",fontWeight:'bold'}}
              options={{
                pageSize: 10,
                headerStyle: {
                  backgroundColor: '#18262E',
                  color:"white"
                },
                searchFieldStyle:{
                    color:"black",
                   // background:"green !important",
                    paddingTop:"1%"
                },
                searchFieldAlignment:"right",
                rowStyle:x => {
                    if (x.tableData.id % 2) {
                        return {backgroundColor: "#18262E",cursor:"pointer"}
                    }
                    else{
                        return {backgroundColor: "#24343d",cursor:"pointer"}
                    }
                },
                actionsCellStyle:{
                    display:'none'
                },
                actionsColumnIndex:{
                    display:'none'
                },
                cellStyle:{
                    color:"white"
                },
                filterCellStyle:{
                    color:"white"
                },
                paginationType:{
                    color:"white"
                },

              }}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const data = [...this.state.data];
                      data.push(newData);
                     this.setState({ ...this.state, data });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const data = [...this.state.data];
                      data[data.indexOf(oldData)] = newData;
                      this.setState({ ...this.state, data });
                    }, 600);
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const data = [...this.state.data];
                      data.splice(data.indexOf(oldData), 1);
                      this.setState({ ...this.state, data });
                    }, 600);
                  }),
              }}
            />
    </div>
    )
  }
}
export default users;

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


