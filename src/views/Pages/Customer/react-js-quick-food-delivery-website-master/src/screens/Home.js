import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

import '../App.css'
import { FaHeart } from "react-icons/fa";
import { Rating } from '@material-ui/lab';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Popup from "reactjs-popup";

/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
*/
class Home extends Component {
  constructor() {
    super()
    this.state = {
      homeSearchBarText: "",
      gotdata:[
        {id:1,name:'Rawalpindi'},
        {id:2,name:'Islamabad'},
        {id:3,name:'Lahore'},
        {id:4,name:'Karachi'},
      ]
    }
    this.handleSearchBar = this.handleSearchBar.bind(this);
  }
 myFunction = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var LessBtn = document.getElementById("showless");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";  
      btnText.style.display = "inline";
      LessBtn.style.display = "none";
      moreText.style.display = "none";
      
    } else {
      dots.style.display = "none";
      btnText.style.display= "none";
      moreText.style.display = "inline";
      LessBtn.style.display = "inline";
    }
  }

  myFunction2 = () => {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
    var LessBtn = document.getElementById("showless2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";  
      btnText.style.display = "inline";
      LessBtn.style.display = "none";
      moreText.style.display = "none";
      
    } else {
      dots.style.display = "none";
      btnText.style.display= "none";
      moreText.style.display = "inline";
      LessBtn.style.display = "inline";
    }
  }

  myFunction3 = () => {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
    var LessBtn = document.getElementById("showless3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";  
      btnText.style.display = "inline";
      LessBtn.style.display = "none";
      moreText.style.display = "none";
      
    } else {
      dots.style.display = "none";
      btnText.style.display= "none";
      moreText.style.display = "inline";
      LessBtn.style.display = "inline";
    }
  }

  
  myFunction4 = () => {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
    var LessBtn = document.getElementById("showless4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";  
      btnText.style.display = "inline";
      LessBtn.style.display = "none";
      moreText.style.display = "none";
      
    } else {
      dots.style.display = "none";
      btnText.style.display= "none";
      moreText.style.display = "inline";
      LessBtn.style.display = "inline";
    }
  }
  handleSearchBar(event,name) {
  //  var x=name;
  //  const { homeSearchBarText } = this.state
  //  if (homeSearchBarText) {
 //     this.props.history.push('/distributors', this.state.homeSearchBarText)
//    }
  
    var x=name;
    console.log(x);
    const { homeSearchBarText } = this.state
    if(x===undefined)
    {
      if (homeSearchBarText) {

        localStorage.setItem('City', this.state.homeSearchBarText);
        this.props.history.push('/distributors', this.state.homeSearchBarText)
      }
    }
    else{
      localStorage.setItem('City',x);
      this.setState({homeSearchBarText:x})
      this.props.history.push('/distributors', this.state.homeSearchBarText)
    }


  
  }

  handleOrderNowBtn(){
    this.props.history.push('/distributors')
  }

  render() {
    return (
      <div>
        {/* Home Navbar Section */}
        <div className="container-fluid home-cont1">
          <div className="">
            {/* <Navbar history={this.props.history} /> */}
            <Navbar2 history={this.props.history} />
            <div className="container home-cont1-text">
              <h1 className="h1 text-uppercase text-white text-center mb-4"><strong>LPG Gas Made <br /> Easy And Safe</strong></h1>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                    
                      <Popup trigger={ <input type="text" className="form-control text-uppercase" autoComplete='off' id="searchText" placeholder="Enter your City Name here." onChange={(e) => { this.setState({ homeSearchBarText: e.target.value }) }} />  } 
                                                    position="bottom center"    >
                                                        
                                                    {this.state.gotdata.map(print => {

                                                                    return (  <div  key={print.id} style={{cursor:'pointer'}} onClick = {(event)=>{this.handleSearchBar(event,print.name)}} className='citySuggDiv' >
                                                                                                                                
                                                                            {print.name} &nbsp;       
                                                                                                
                                                                            </div>)
                                                                    }



                                                                    )}
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    </Popup>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <button type="button" className="btn btn-warning mb-2 text-uppercase btn-block rounded-0" onClick={this.handleSearchBar}><b>Search</b></button>
                  </div>
                </div>
              </div>
              <div className="container text-white text-center mt-4">
               <div className="col-lg-7 col-md-8 col-sm-12 mx-auto">
                  <img style={{ width: "95%" }} alt="" src={require("../assets/images/options-img1.png")} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Number section */}
        <div className="container-fluid py-2 bg-warning">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <p className="my-3 text-lg-right text-md-right text-center text-white"><b className="mr-2 h5">18</b>Distributor</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <p className="my-3 text-center text-white"><b className="mr-2 h5">9</b>People Served</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <p className="my-3 text-lg-left text-md-left text-center text-white"><b className="mr-2 h5">44</b>Registered Users</p>
            </div>
          </div>
        </div>

        
             {/* InfraStructure */}
             <div style={{backgroundColor:'#282C35'}}  className="container-fluid text-center py-4">
          <div className="py-4">
            <h2 style={{color:'white'}}  className="h2 text-uppercase">InfraStructure</h2>
            <p  style={{color:'white',marginLeft:'25%',textAlign:'justify',width:'50%',justifyContent:'center',alignItems:'center'}} >SMART GAS has developed a robust infrastructure comprising of import terminals, filling plants, depots at strategic locations to assure uninterrupted, quick and timely delivery of LPG – key factors that have helped earn the trust of its customers. These facilities are regularly upgraded and more filling plants are being added each year to meet the ever-growing needs.</p>
          </div>
          <div className="container">
            <div className="row">
              <div  className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Choose A Restaurant" src={require("../assets/images/supply.png")} />
                </span>
                <h3 style={{color:'white'}} className="h3 mb-4">Supply Management</h3>
                <p  className="mb-4" style={{textAlign:'justify',color:'white'}}>Our team of Supply Management experts ensures that SMART GAS receives top quality LPG around the year with assured availability.</p>
              </div>
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Choose A Tasty Dish" src={require("../assets/images/logistic.png")} />
                </span>
                <h3 style={{color:'white'}} className="h3 mb-4">Logistics</h3>
                <p  className="mb-4"  style={{textAlign:'justify',color:'white'}}>A dedicated fleet of bulk tankers and cylinder trucks are readily at hand to assure timely supplies to our customers. As a commitment<span id="dots3">...</span> <span onClick={this.myFunction3} id="myBtn3"  >Read More</span> <span id="more3" style={{display:'none'}} > towards better customer service, we have implemented Vehicle Tracking System (VTS) on our bulk tankers and cylinder trucks to get real-time information on product movement.For enhanced safety, we use ‘Conspicuity Profiling’ which enables greater visibility of tankers, especially in the night.</span> <span style={{display:'none'}} onClick={this.myFunction3} id="showless3" > Read Less </span></p>
              </div>
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Pick Up Or Delivery" src={require("../assets/images/fran.png")} />
                </span>
                <h3 style={{color:'white'}} className="h3 mb-4">Franchisee Network</h3>
                <p   className="mb-4" style={{textAlign:'justify',color:'white'}} >Customer – whether industrial, commercial or domestic - is never far away from our reach. Our vast franchisee network <span id="dots2">...</span> <span onClick={this.myFunction2} id="myBtn2"  >Read More</span> <span id="more2" style={{display:'none'}} >makes sure that we serve our customers On Time, Every Time. </span> <span style={{display:'none'}} onClick={this.myFunction2} id="showless2" > Read Less </span></p>
             
                
              </div>
            </div>
          </div>
        </div>

        {/* Home How it work section */}
        <div className="container-fluid text-center py-4">
          <div className="py-4">
            <h2 className="h2 text-uppercase">How It Works</h2>
            <p>Choose, Select, Recieve.</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Choose A Restaurant" src={require("../assets/images/how-to-work2.png")} />
                </span>
                <h3 className="h3 mb-4">Choose A Distributor</h3>
                <p className="mb-4">You can find our Franchisee nearest to your location.</p>
              </div>
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Choose A Tasty Dish" src={require("../assets/images/how-to-work3.png")} />
                </span>
                <h3 className="h3 mb-4">Choose A LPG Gas</h3>
                <p className="mb-4">LPG Cylinders are strong and cannot be damaged easily.</p>
              </div>
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Pick Up Or Delivery" src={require("../assets/images/how-to-work1.png")} />
                </span>
                <h3 className="h3 mb-4">Pick Up Or Delivery</h3>
                <p className="mb-4">Just pick it up or get it delivered in your home.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Home Order now section */}
        <div className="container-fluid text-center py-5 home-cont3">
          <p className="h1 text-uppercase text-white mt-5 mb-3">Just Order And We Will Deliver You</p>
          <p className="text-white mb-3">Pellentesque eget justo eget nibh luctus semper at ut tellus.</p>
          <button type="button" className="btn btn-warning text-uppercase mb-5" onClick={() => this.handleOrderNowBtn()}><b>Order Now</b></button>
        </div>

        {/*  Featured Distrubutor section */}
       {/*
        <div style={{backgroundColor:'#282C35'}} className="container-fluid py-5">
          <div className="py-4">
            <h2 style={{color:'white'}} className="h2 text-uppercase text-center">Featured Distibutors</h2>
            <p style={{color:'white'}} className="text-center">Best Distributors in Town.</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="container res-shadow res-border">
                  <div style={{ backgroundColor:'white' }} className="row p-3">
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
                      <img style={{ width: "70%" }} alt="Natural Healthy Food" src={require("../assets/images/l1.jpg")} />
                    </div>
                    <div style={{ position: "relative",}} className="col-lg-8 col-md-8 col-sm-12 py-2">
                      <h5  className="mb-1">Natural Healthy Distributor</h5>
                      <p  className="mb-2"><small>Lpg Gas</small></p>
                      <p>
                        <small className="">
                        <Rating value={4} readOnly />
      {/*                     <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                        </small>
                        
                      </p>
                      <span style={{ position: "absolute", top: 5, right: 5 }}><FaHeart icon="heart" className="text-success mr-1" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="container res-shadow res-border">
                  <div style={{ backgroundColor:'white' }}  className="row p-3">
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
                      <img style={{ width: "70%" }} alt="Menu & Drinks" src={require("../assets/images/l2.png")} />
                    </div>
                    <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
                      <h5 className="mb-1">Cool &amp; LPG</h5>
                      <p  className="mb-2"><small>LPG Gas</small></p>
                      <p>
                        <small className="">
                  {/*        <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <Rating value={4} readOnly />
                        </small>
                        
                      </p>
                      <span style={{ position: "absolute", top: 5, right: 5 }}> <FaHeart icon="heart" className="text-success mr-1" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="container res-shadow res-border">
                  <div style={{ backgroundColor:'white' }} className="row p-3">
                    <div  className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
                      <img style={{ width: "70%" }} alt="Chefs" src={require("../assets/images/l3.jpeg")} />
                    </div>
                    <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
                      <h5  className="mb-1">LPGs</h5>
                      <p  className="mb-2"><small>LPG GAS</small></p>
                      <p>
                        <small className="">
               {/*            <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <Rating value={4} readOnly />
                        </small>
                        
                      </p>
                      <span style={{ position: "absolute", top: 5, right: 5 }}><FaHeart icon="heart" className="text-success mr-1" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="container res-shadow res-border">
                  <div style={{ backgroundColor:'white' }} className="row p-3">
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
                      <img style={{ width: "70%" }} alt="Menu's" src={require("../assets/images/l4.jpg")} />
                    </div>
                    <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
                      <h5  className="mb-1">LPG's</h5>
                      <p className="mb-2"><small>LPG GAS</small></p>
                      <p>
                        <small className="">
               {/*           <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <Rating value={4} readOnly />
                        </small>
                        
                      </p>
                      <span style={{ position: "absolute", top: 5, right: 5 }}><FaHeart icon="heart" className="text-success mr-1" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="container res-shadow res-border">
                  <div style={{ backgroundColor:'white' }} className="row p-3">
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
                      <img style={{ width: "70%" }} alt="Food N&H" src={require("../assets/images/l5.png")} />
                    </div>
                    <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
                      <h5  className="mb-1">LPG N&amp;GAS</h5>
                      <p  className="mb-2"><small>LPG GAS</small></p>
                      <p>
                        <small className="">
            {/*               <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <Rating value={4} readOnly />
                        </small>
                        
                      </p>
                      <span style={{ position: "absolute", top: 5, right: 5 }}><FaHeart icon="heart" className="text-success mr-1" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="container res-shadow res-border">
                  <div style={{ backgroundColor:'white' }} className="row p-3">
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
                      <img style={{ width: "70%" }} alt="Restaurant" src={require("../assets/images/l6.jpg")} />
                    </div>
                    <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
                      <h5  className="mb-1">Distributor</h5>
                      <p  className="mb-2"><small>LPG GAS</small></p>
                      <p>
                        <small className="">
       {/*                   <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <FontAwesomeIcon icon="star" className="rating mr-1" />
                          <Rating value={5} readOnly />
                        </small>
                       
                      </p>
                      <span style={{ position: "absolute", top: 5, right: 5 }}><FaHeart icon="heart" className="text-success mr-1" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        */}

            {/* Safty Tips*/}
            <div className="container-fluid text-center py-4">
          <div className="py-4">
            <h2  className="h2 text-uppercase">Safety Tips</h2>
            {/* <p>Pick, Select, Recieve.</p> */}
          </div>
          <div className="container">
            <div className="row">
              <div  className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Choose A Restaurant" src={require("../assets/images/home.png")} />
                </span>
                <h3 className="h3 mb-4">Safety Tips for Home</h3>
                <p className="mb-4" style={{textAlign:'justify'}}>LPG is a popular and efficient energy source used in homes for cooking. It is imperative that you take good care and use it safely and responsibly. LPG Cylinders are strong and cannot be damaged easily. However leaks can occur from cylinder, valves and pipe connections if not kept in good condition or if <span id="dots4">...</span> <span onClick={this.myFunction4} id="myBtn4"  >Read More</span> <span id="more4" style={{display:'none'}} >considerable care is not taken while replacing them.</span> <span style={{display:'none'}} onClick={this.myFunction4} id="showless4" > Read Less </span></p>
              </div>
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Choose A Tasty Dish" src={require("../assets/images/Food.png")} />
                </span>
                <h3 className="h3 mb-4">Safety Tips for Hotel</h3>
                <p className="mb-4"  style={{textAlign:'justify'}}>Smart gas emphasizes importance of safety at customer's LPG installations and operations.
Safe working environments ensure employee safety and productivity, be it at industrial or commercial set up. We recommend our customers to follow these safety measures to ensure a safe and enjoyable work place
</p>
              </div>
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Pick Up Or Delivery" src={require("../assets/images/factory.png")} />
                </span>
                <h3 className="h3 mb-4">Safety Tips for Industry</h3>
                <p className="mb-4" style={{textAlign:'justify'}} >SMART GAS emphasizes importance of safety at customer's LPG installations and other operations.
Safe working environments ensure employee safety and productivity, be it at industrial or commercial set up. We recommend our customers to follow these safety measures to ensure a safe and enjoyable work place.
</p>
             
                
              </div>
            </div>
          </div>
        </div>


          {/* Apply now section */}
          <div className="container-fluid text-center py-5 home-cont3">
          <p className="h1 text-uppercase text-white mt-5 mb-3">Apply to become a Smart Gas Franchisee</p>
          <p className="text-white mb-3">You just have to fill this simple form to grab the opportunity for a long term, sustainable business partnership with the Pakistan  Largest LPG Company.</p>
          <button type="button" className="btn btn-warning text-uppercase mb-5" onClick={() => this.handleOrderNowBtn()}><b>Apply Now</b></button>
        </div>

             {/* LPG Types */}
             <div className="container-fluid text-center py-4">
          <div className="py-4">
            <h2  className="h2 text-uppercase">LPG Types</h2>
            {/* <p>Pick, Select, Recieve.</p> */}
          </div>
          <div className="container">
            <div className="row">
              <div  className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Choose A Restaurant" src={require("../assets/images/home.png")} />
                </span>
                <h3 className="h3 mb-4">LPG FOR HOMES</h3>
                <p className="mb-4" style={{textAlign:'justify'}}>Quick gas connection, fully refundable deposit, timely delivery, wide network of franchisees and safety assurance make SMARTGAS the most preferred and customer friendly LPG brand for home.</p>
              </div>
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Choose A Tasty Dish" src={require("../assets/images/Food.png")} />
                </span>
                <h3 className="h3 mb-4">LPG FOR HOTELS</h3>
                <p className="mb-4"  style={{textAlign:'justify'}}>Many commercial establishments like hotels, restaurants, catering agencies, bakeries, resorts, clubs, cafes, sweet shops, canteens and others prefer SMART GAS for prompt service, assured LPG quality, quantity and timely delivery</p>
              </div>
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Pick Up Or Delivery" src={require("../assets/images/factory.png")} />
                </span>
                <h3 className="h3 mb-4">LPG FOR INDUSTRY</h3>
                <p className="mb-4" style={{textAlign:'justify'}} >SMART GAS LPG is highly energy efficient and safe to use. Save big on both fuel costs as well as maintenance costs of burners, ovens and furnaces. Your final product will also be of greater uniformity and quality.<span id="dots">...</span> <span onClick={this.myFunction} id="myBtn"  >Read More</span> <span id="more" style={{display:'none'}} > With our global technical expertise and local experience in converting other fuels to LPG, we have delivered and evolved to become a leading LPG service provider offering total solution packages,  installation and maintenance, guidance on safety management and prompt delivery of LPG on time, every time.</span> <span style={{display:'none'}} onClick={this.myFunction} id="showless" > Read Less </span></p>
             
                
              </div>
            </div>
          </div>
        </div>
        {/* <div>
        <Carousel
        showThumbs={false}
        infiniteLoop={true}
        width={'100%'}
     
        >

                <div>
                    <img src={require("../assets/images/c1.jpg")} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require("../assets/images/c2.jpg")} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require("../assets/images/c3.jpg")} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
     </div> */}
          

  <section class="my-5" style={{
    paddingTop: '5%',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor:'#282C35'


}} >
                   
                   <h2 style={{color:'white'}} class="h1-responsive font-weight-bold text-center my-5">Our Best Projects</h2>

                   <p style={{color:'white'}} class="grey-text text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                   proident, sunt in culpa qui officia deserunt mollit est laborum.</p>

               



               <div class="row">


               <div class="col-lg-5 mb-lg-0 mb-5">
               
                   <img src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg" alt="Sample project image" class="img-fluid rounded z-depth-1"/>
               </div>

               <div class="col-lg-7">


                   <div class="row mb-3">
                           <div class="col-md-1 col-2">
                               <i style={{color:'#fbc100'}}  class="fas fa-book fa-2x"></i>
                               {/* <i class="fab fa-accessible-icon"></i> */}
                           </div>
                           <div class="col-md-11 col-10">
                               <h5 style={{color:'white'}} class="font-weight-bold mb-3">Education</h5>
                               <p style={{color:'white'}} class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam,
                               aperiam minima elit assumenda voluptate velit.</p>
                           </div>
                   </div>
               
                   <div class="row mb-3">
                           <div class="col-md-1 col-2">
                               <i style={{color:'#fbc100'}}   class="fas fa-code fa-2x"></i>
                           </div>
                           <div class="col-md-11 col-10">
                               <h5 style={{color:'white'}} class="font-weight-bold mb-3">Technology</h5>
                               <p style={{color:'white'}} class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam,
                               aperiam minima elit assumenda voluptate velit.</p>
                           </div>
                   </div>

                   <div class="row">
                           <div class="col-md-1 col-2">
                               <i style={{color:'#fbc100'}}   class="far fa-money-bill-alt fa-2x"></i>
                           </div>
                           <div class="col-md-11 col-10">
                               <h5 style={{color:'white'}} class="font-weight-bold mb-3">Finance</h5>
                               <p style={{color:'white'}} class="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores
                               nam, aperiam minima elit assumenda voluptate velit.</p>
                           </div>
                   </div>
               

               </div>


               </div>


           


               <div class="row" style={{marginTop:'75px'}}>


               <div class="col-lg-7">


                   <div class="row mb-3">
                   <div class="col-md-1 col-2">
                       <i style={{color:'#fbc100'}}  class="far fa-chart-bar fa-2x"></i>
                   </div>
                   <div class="col-md-11 col-10">
                       <h5 style={{color:'white'}} class="font-weight-bold mb-3">Marketing</h5>
                       <p  style={{color:'white'}} class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam,
                       aperiam minima elit assumenda voluptate velit.</p>
                   </div>
                   </div>
               
                   <div class="row mb-3">
                   <div class="col-md-1 col-2">
                       <i  style={{color:'#fbc100'}}   class="fas fa-music fa-2x"></i>
                   </div>
                   <div class="col-md-11 col-10">
                       <h5 style={{color:'white'}} class="font-weight-bold mb-3">Entertainment</h5>
                       <p style={{color:'white'}} class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam,
                       aperiam minima elit assumenda voluptate velit.</p>
                   </div>
                   </div>
               
                   <div class="row mb-lg-0 mb-5">
                   <div class="col-md-1 col-2">
                       <i style={{color:'#fbc100'}}  class="far fa-grin fa-2x"></i>
                   </div>
                   <div class="col-md-11 col-10">
                       <h5 style={{color:'white'}} class="font-weight-bold mb-3">Communication</h5>
                       <p style={{color:'white'}}class="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores
                       nam, aperiam minima elit assumenda voluptate velit.</p>
                   </div>
                   </div>
               

               </div>

                       <div class="col-lg-5">
                           
                           <img src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg" alt="Sample project image" class="img-fluid rounded z-depth-1"/>
                       </div>


               </div>

               

</section>


<section id="what-we-do">
		<div class="container-fluid">
			<h2 class="section-title mb-2 h1">Our Services</h2>
			<p class="text-center text-muted h5">Having and managing a correct marketing strategy is crucial in a fast moving market.</p>
			<div class="row mt-5">
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-1">
							<h3 class="card-title">PIPELINE INSTALLATION</h3>
							<p class="card-text">High pressure gas pipeline installation</p>
							<a href="javascript:void();" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-2">
							<h3 class="card-title">MAINTENANCE</h3>
							<p class="card-text">Pipleline Maintenance</p>
							<a href="javascript:void();" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-3">
							<h3 class="card-title">Boring</h3>
							<p class="card-text">Road Boring</p>
							<a href="javascript:void();" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-4">
							<h3 class="card-title">Fusion/Jointing mdpe and hdpe pipe</h3>
							<p class="card-text">Fusion/Jointing mdpe and hdpe pipe</p>
							<a href="javascript:void();" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-5">
							<h3 class="card-title">X-ray</h3>
							<p class="card-text">X-RAY welding of ms pipe, ss pipe and se</p>
							<a href="javascript:void();" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-6">
							<h3 class="card-title">Fire fighting pipeline installation</h3>
							<p class="card-text">Fire fighting pipeline installation</p>
							<a href="javascript:void();" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-6">
							<h3 class="card-title">Low pressure gas pipleline installation</h3>
							<p class="card-text">Low pressure gas pipleline installation</p>
							<a href="javascript:void();" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-6">
							<h3 class="card-title">Ditching back filling and reinsatement</h3>
							<p class="card-text">Ditching back filling and reinsatement</p>
							<a href="javascript:void();" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-6">
							<h3 class="card-title">Testing</h3>
							<p class="card-text">Testing</p>
							<a href="javascript:void();" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-6">
							<h3 class="card-title">Road Cutting</h3>
							<p class="card-text">Road Cutting</p>
							<a href="javascript:void();" title="Read more" class="read-more" >Read more<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>

			</div>
		</div>	
	</section>


        {/* Home Footer */}
        <Footer />
      </div>
    );
  }
}

export default Home;