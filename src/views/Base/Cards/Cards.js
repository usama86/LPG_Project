import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import MaterialTable from 'material-table'
import { AppSwitch } from '@coreui/react'

class Cards extends Component {
 
  state = {
  
    ModalTitle:'',
    userName:'',
    userType:'',
    userStatus:'',
    modal:false,
  
    columns: [
      { title: 'Order_Id', field: 'oid',type:'numeric',cellStyle: {
                
        color: 'white'
    }, },
{ title: 'Order_Date', field: 'odate',cellStyle: {
      
        color: 'white'
    }, },
{ title: 'Customer_Id', field: 'cid',type:'numeric',cellStyle: {

        color: 'white'
    }, },
{ title: 'Customer_Name', field: 'cname',cellStyle: {

        color: 'white'
    }, },
{ title: 'Customer_Address', field: 'caddress',cellStyle: {

        color: 'white'
    }, },
{ title: 'Product_Id', field: 'id', type: 'numeric',cellStyle: {

      color: 'white'
  }, },
{ title: 'Product_Name', field: 'product',cellStyle: {

        color: 'white'
    }, },
{ title: 'Ordered_Qty', field: 'qty',type:'numeric',cellStyle: {

        color: 'white'
    }, },
      
    ],
    data: [
     
      {
        oid: 1,
        odate: '1/7/2019',
        cid:2000,
        cname:'Usama Bhatti',
        caddress:'H#36 St#12 E11 isld',
        id:1000,
        product:'LPG1',
        qty:2,
      },
      {
        oid: 2,
        odate: '1/4/2019',
        cid:2001,
        cname:'Uzair Abbass',
        caddress:'H#3 St#4 F7 isld',
        id:1001,
        product:'LPG2',
        qty:4,
      },
      {
        oid: 3,
        odate: '1/2/2019',
        cid:2002,
        cname:'Ali Hamza',
        caddress:'H#47 St#5 Block D PWD Isld',
        id:1002,
        product:'LPG3',
        qty:7,
      },
      {
        oid: 4,
        odate: '17/2/2019',
        cid:2003,
        cname:'Bilal Zafar',
        caddress:'H#2 St#7 Block A BAHRIA TOWN Isld',
        id:1003,
        product:'LPG4',
        qty:8,
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
              title="Transactions"
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

export default Cards;
