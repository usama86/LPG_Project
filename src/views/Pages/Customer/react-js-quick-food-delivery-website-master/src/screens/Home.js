import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

import '../App.css'
import { FaHeart } from "react-icons/fa";
import { Rating } from '@material-ui/lab';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
*/
class Home extends Component {
  constructor() {
    super()
    this.state = {
      homeSearchBarText: "",
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
  handleSearchBar() {
    const { homeSearchBarText } = this.state
    if (homeSearchBarText) {
      this.props.history.push('/restaurants', this.state.homeSearchBarText)
    }
  }

  handleOrderNowBtn(){
    this.props.history.push('/restaurants')
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
                    <input type="text" className="form-control text-uppercase" id="searchText" placeholder="Distributor Name" onChange={(e) => { this.setState({ homeSearchBarText: e.target.value }) }} />
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <button type="button" className="btn btn-warning mb-2 text-uppercase btn-block rounded-0" onClick={this.handleSearchBar}><b>Search</b></button>
                  </div>
                </div>
              </div>
              <div className="container text-white text-center mt-4">
                <div className="col-lg-7 col-md-8 col-sm-12 mx-auto">
                  <img style={{ width: "95%" }} alt="" src={require("../assets/images/options-img.png")} />
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
                      <img style={{ width: "70%" }} alt="Natural Healthy Food" src={require("../assets/images/listing-logo03.png")} />
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
                          <FontAwesomeIcon icon="star" className="rating mr-1" />*/}
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
                      <img style={{ width: "70%" }} alt="Menu & Drinks" src={require("../assets/images/listing-logo09.png")} />
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
                          <FontAwesomeIcon icon="star" className="rating mr-1" />*/}
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
                      <img style={{ width: "70%" }} alt="Chefs" src={require("../assets/images/listing-logo12.png")} />
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
                          <FontAwesomeIcon icon="star" className="rating mr-1" />*/}
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
                      <img style={{ width: "70%" }} alt="Menu's" src={require("../assets/images/listing-logo15.png")} />
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
                          <FontAwesomeIcon icon="star" className="rating mr-1" />*/}
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
                      <img style={{ width: "70%" }} alt="Food N&H" src={require("../assets/images/2.png")} />
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
                          <FontAwesomeIcon icon="star" className="rating mr-1" />*/}
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
                      <img style={{ width: "70%" }} alt="Restaurant" src={require("../assets/images/listing-logo13.png")} />
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
                          <FontAwesomeIcon icon="star" className="rating mr-1" />*/}
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
        <div>
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
     </div>
          





     


	





        


        {/* Home Footer */}
        <Footer />
      </div>
    );
  }
}

export default Home;