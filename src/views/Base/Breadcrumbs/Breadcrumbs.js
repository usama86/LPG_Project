import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import MaterialTable from 'material-table'
import  '../../Theme/Colors/Colors.css'







class Breadcrumbs extends Component {



  state = {
  
    ModalTitle:'',
    userName:'',
    userType:'',
    userStatus:'',
    modal:false,
  
    columns: [
      { title: 'PRODUCT_ID', field: 'id',type:'numeric',cellStyle: {
                
                    color: 'white'
                }, },
      { title: 'PRODUCT_NAME', field: 'product',cellStyle: {
                  
                    color: 'white'
                }, },
      { title: 'RATE', field: 'rate',type:'numeric',cellStyle: {
       
                    color: 'white'
                }, },
      { title: 'QTY', field: 'qty',type:'numeric',cellStyle: {
     
                    color: 'white'
                }, },
      { title: 'AMOUNT', field: 'amount', type: 'numeric',cellStyle: {
       
                    color: 'white'
                }, },
      { title: 'DISCOUNT', field: 'discount', type: 'numeric',cellStyle: {
       
                  color: 'white'
              }, },
      { title: 'TOTAL', field: 'total', type: 'numeric',cellStyle: {
       
                    color: 'white'
                }, },
      { title: 'MONTH', field: 'month',cellStyle: {
    
                    color: 'white'
                }, },
      { title: 'YEAR', field: 'year',cellStyle: {
                    color: 'white'
                }, },
      
    ],
    data: [
     
      {
        id: 1000,
        product: 'LPG1',
        rate:1800,
        qty:10,
        amount:18000,
        discount:1000,
        total:17000,
        month:'JANUARY',
        year:'2019'
      },
      {
        id: 1001,
        product: 'LPG2',
        rate:1900,
        qty:11,
        amount:20900,
        discount:900,
        total:20000,
        month:'FEBRUARY',
        year:'2019'
      },
      {
        id: 1002,
        product: 'LPG3',
        rate:2000,
        qty:12,
        amount:24000,
        discount:3000,
        total:21000,
        month:'MARCH',
        year:'2019'
      },
      {
        id: 1004,
        product: 'LPG4',
        rate:2100,
        qty:5,
        amount:10500,
        discount:500,
        total:10000,
        month:'APRIL',
        year:'2019'
      },
      {
        id: 1005,
        product: 'LPG5',
        rate:1500,
        qty:2,
        amount:3000,
        discount:0,
        total:3000,
        month:'MAY',
        year:'2019'
      },
      {
        id: 1006,
        product: 'LPG6',
        rate:1400,
        qty:6,
        amount:8400,
        discount:400,
        total:8000,
        month:'JUNE',
        year:'2019'
      },
    ],
    
  
   }
  






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
                columnsButton:{
                  display:false
                },
                loadingType:'overlay',
                

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



           
          </Col>
        </Row>
      </div>
    );
  }
}

export default Breadcrumbs;
