import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import firebase from '../config/firebase';
import { connect } from 'react-redux';
import { orderNow } from '../config/firebase';
import { my_foods } from '../store/action';
import Swal from 'sweetalert2'
import { FaPlusCircle,FaInfoCircle} from "react-icons/fa"; 
import { IoMdBasket } from "react-icons/io";
import { GiSplitCross,GiFuelTank } from "react-icons/gi";
import { MdRateReview } from "react-icons/md";

import Lp1 from '../assets/images/l1.jpg'
import Lp2 from '../assets/images/l2.png'
import Lp3 from '../assets/images/l3.jpeg'
import Lp4 from '../assets/images/l4.jpg'

import '../App.css'
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
*/
class RestaurantDetails extends Component {
    constructor() {
        super()
        this.state = {
            tab1: "col-12 col-lg-4 col-md-4 text-center res-details-tab-active",
            tab2: "col-12 col-lg-4 col-md-4 text-center",
            tab3: "col-12 col-lg-4 col-md-4 text-center",
            tab1Content: true,
            tab2Content: false,
            tab3Content: false,
            cartItemsList: [],
            totalPrice: 0,
            showCartList: false,
        }
    }

    async componentDidMount() {
        const { state } = await this.props.location;
        this.fetchMenuItems();
        if (state) {
            this.setState({
                resDetails: state,
            })
        } else {
            this.props.history.push('/restaurants')
        }
    }

    static getDerivedStateFromProps(props) {
        const { state } = props.location;
        const { user } = props
        return {
            resDetails: state,
            userDetails: user,
        }
    }

    handleTabs(e) {
        if (e === "tab1") {
            this.setState({
                tab1: "col-12 col-lg-4 col-md-4 text-center res-details-tab-active",
                tab2: "col-12 col-lg-4 col-md-4 text-center",
                tab3: "col-12 col-lg-4 col-md-4 text-center",
                tab1Content: true,
                tab2Content: false,
                tab3Content: false,
            })
        } else if (e === "tab2") {
            this.setState({
                tab1: "col-12 col-lg-4 col-md-4 text-center",
                tab2: "col-12 col-lg-4 col-md-4 text-center res-details-tab-active",
                tab3: "col-12 col-lg-4 col-md-4 text-center",
                tab1Content: false,
                tab2Content: true,
                tab3Content: false,
            })
        } else if (e === "tab3") {
            this.setState({
                tab1: "col-12 col-lg-4 col-md-4 text-center",
                tab2: "col-12 col-lg-4 col-md-4 text-center",
                tab3: "col-12 col-lg-4 col-md-4 text-center res-details-tab-active",
                tab1Content: false,
                tab2Content: false,
                tab3Content: true,
            })
        }
    }

    fetchMenuItems() {
        const { resDetails } = this.state;
        firebase.firestore().collection('users').doc(resDetails.id).collection("menuItems").onSnapshot(snapshot => {
            const menuItemsList = [];
            snapshot.forEach(doc => {
                const obj = { id: doc.id, ...doc.data() }
                menuItemsList.push(obj)
            })
            this.setState({
                menuItemsList: menuItemsList,
            })
        })
    }

    addToCart(item) {
        const { cartItemsList, totalPrice } = this.state
        if (item) {
            cartItemsList.push(item);
            this.setState({
                totalPrice: totalPrice + Number(item.itemPrice),
                cartItemsList: cartItemsList,
                showCartList: true,
            })
        }
    }

    removeCartItem(itemIndex) {
        const { cartItemsList, totalPrice } = this.state
        const removedItemPrice = Number(cartItemsList[itemIndex].itemPrice)
        cartItemsList.splice(itemIndex, 1);
        this.setState({
            totalPrice: totalPrice - removedItemPrice,
            cartItemsList: cartItemsList,
        })
    }

    async handleConfirmOrderBtn() {
        const { cartItemsList, totalPrice, resDetails, userDetails } = this.state;
        console.log(cartItemsList.length)
        if (userDetails) {
            if (!userDetails.isRestaurant) {
                if (cartItemsList.length > 0) {
                    try {
                        const history = this.props.history;
                        const orderNowReturn = await orderNow(cartItemsList, totalPrice, resDetails, userDetails, history)
                        console.log(orderNowReturn)
                        // console.log("Successfully Ordered")
                        Swal.fire({
                            title: 'Success',
                            text: 'Successfully Ordered',
                            type: 'success',
                        }).then(() => {
                            history.push("/my-orders");
                        })
                    } catch (error) {
                        // console.log(" Error in confirm order => ", error)
                        Swal.fire({
                            title: 'Error',
                            text: error,
                            type: 'error',
                        })
                    }
                } else {
                    console.log("You have to select atleast one item")
                    Swal.fire({
                        title: 'Error',
                        text: 'You have to select atleast one item',
                        type: 'error',
                    })
                }
            } else {
                // console.log("You are not able to order")
                Swal.fire({
                    title: 'Error',
                    text: 'You are not able to order',
                    type: 'error',
                })
            }
        } else {
            // console.log("You must be Loged In")
            Swal.fire({
                title: 'Error',
                text: 'You must be Loged In',
                type: 'error',
            }).then(() => {
                this.props.history.push('/login')
            })
        }
    }

    _renderMenuItemsList() {
        const { menuItemsList } = this.state;
        if (menuItemsList) {
            return (
                <div>
                <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={Math.random()}>
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                            <img style={{ width: "70px", height: "70px" }} alt="Natural Healthy Food" src={Lp1} />
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                            <h6 className="">LPG Cylinder</h6>
                            <p className=""><small>40kg</small></p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-center">
                            <span className="mx-3">RS. 65</span>
                            <span className="menuItemsListAddBtn"  ><FaPlusCircle icon="plus" className="text-warning" /></span>
                        </div>
                    </div>
                </div>
                <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={Math.random()}>
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                            <img style={{ width: "70px", height: "70px" }} alt="Natural Healthy Food" src={Lp2} />
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                            <h6 className="">LPG Cylinder</h6>
                            <p className=""><small>40kg</small></p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-center">
                            <span className="mx-3">RS. 85</span>
                            <span className="menuItemsListAddBtn"  ><FaPlusCircle icon="plus" className="text-warning" /></span>
                        </div>
                    </div>
                </div>
                <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={Math.random()}>
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                            <img style={{ width: "70px", height: "70px" }} alt="Natural Healthy Food" src={Lp3} />
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                            <h6 className="">LPG Cylinder</h6>
                            <p className=""><small>40kg</small></p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-center">
                            <span className="mx-3">RS. 50</span>
                            <span className="menuItemsListAddBtn"  ><FaPlusCircle icon="plus" className="text-warning" /></span>
                        </div>
                    </div>
                </div>
                </div>
            )
            return Object.keys(menuItemsList).map((val) => {
                return (
                    <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={menuItemsList[val].id}>
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                <img style={{ width: "70px", height: "70px" }} alt="Natural Healthy Food" src={menuItemsList[val].itemImageUrl} />
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                <h6 className="">{menuItemsList[val].itemTitle}</h6>
                                <p className=""><small>{menuItemsList[val].itemIngredients}</small></p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-center">
                                <span className="mx-3">RS.{menuItemsList[val].itemPrice}</span>
                                <span className="menuItemsListAddBtn" onClick={() => this.addToCart(menuItemsList[val])} ><FaPlusCircle icon="plus" className="text-warning" /></span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    _renderCartItemsList() {
        const { cartItemsList } = this.state
        if (cartItemsList) {
            return Object.keys(cartItemsList).map((val) => {
                return (
                    <li className="food-item border-bottom pb-2 mb-3" key={val}>
                        <div className="row">
                            <div className="col-8 pr-0">
                                <p className="mb-0">{cartItemsList[val].itemTitle}</p>
                            </div>
                            <div className="col-4 pl-0 text-right">
                                <p className="mb-0"><span className="food-price">RS.{cartItemsList[val].itemPrice}</span><span onClick={() => this.removeCartItem(val)} className="remove-food-item"><GiSplitCross icon="times" /></span></p>
                            </div>
                        </div>
                    </li>
                )
            })
        }
    }

    render() {
        const { tab1, tab2, tab3, tab1Content, tab2Content, tab3Content, resDetails, totalPrice, cartItemsList, showCartList } = this.state;
        return (
            <div>
                <div className="container-fluid res-details-cont1">
                    <div className="">
                        {/* <Navbar history={this.props.history} /> */}
                        <Navbar2 history={this.props.history} />
                        <div className="container px-0 res-details-cont1-text mx-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-2 col-md-3 col-6 text-lg-center text-md-center pr-0 mb-2">
                                        <img className="p-2 bg-white rounded text-center" alt="Natural Healthy Food" style={{ width: "60%" }} src={Lp1} />
                                    </div>
                                    <div className="col-lg-10 col-md-9 col-12 pl-lg-0 pl-md-0">
                                        <h1 className="restaurant-title">Smart Gas Franchise</h1>
                                        <p className="restaurant-text">i-12 Islamabad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ background: "#EBEDF3" }} className="container-fluid py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-12">
                                <div className="listing-category">
                                    <div className="category-heading py-0 mb-1">
                                        <h6 className="m-0">{/*<FontAwesomeIcon icon="utensils" className="mr-2" />*/}Filter</h6>
                                    </div>
                                    <div>
                                        <ul className="category-list">
                                            <li>
                                                <p>Composite cylinder</p>
                                            </li>
                                            <li>
                                                <p>Domestic cylinder</p>
                                            </li>
                                            <li>
                                                <p>Commercial cylinder</p>
                                            </li>
                                            <li>
                                                <p>Industrial cylinder</p>
                                            </li>
                                            <li>
                                                <p>Specials</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="container">
                                    <div className="row">
                                        <div className={tab1} onClick={() => this.handleTabs("tab1")}>
                                            <p className="res-details-tab-text"><GiFuelTank icon="concierge-bell" className="mr-3" />Menu</p>
                                        </div>
                                        <div className={tab2} onClick={() => this.handleTabs("tab2")}>
                                            <p className="res-details-tab-text"><MdRateReview icon="comment-alt" className="mr-3" />Reviews</p>
                                        </div>
                                        <div className={tab3} onClick={() => this.handleTabs("tab3")}>
                                            <p className="res-details-tab-text"><FaInfoCircle icon="info-circle" className="mr-3" />Distributor Info</p>
                                        </div>
                                    </div>
                                    {tab1Content &&
                                        < div className="row menu-section">
                                            <div className="col-12 bg-white p-4">
                                                <div className="input-group input-group-sm mb-4 mt-2">
                                                    <input type="text" className="form-control search-menu-input" htmlFor="search-menu" placeholder="Search food item" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text search-menu-text" id="search-menu">{/*<FontAwesomeIcon icon="search" />*/}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 className="mb-4 text-warning">Best Distributor items:</h6>
                                                    {this._renderMenuItemsList()}
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {tab2Content && <div className="row review-section">
                                        <div className="col-12 bg-white p-4">
                                            <h5>Customer Reviews For {resDetails.userName}</h5>
                                            <div className="row p-5">
                                                <div className="col-6 text-right">
                                                    <img alt="Review Icon" src={require("../assets/images/icon-review.png")} />
                                                </div>
                                                <div className="col-6 pl-0">
                                                    <p className="mb-0"><strong>Write your own reviews</strong></p>
                                                    <small className="text-danger">Only customers can write reviews</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                    {tab3Content && <div className="row info-section">
                                        <div className="col-12 bg-white p-4">
                                            <h5>Overview {resDetails.userName}</h5>
                                            <p>BEST LPG IN TOWN</p>
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="container bg-white py-3 order-card">
                                    <h6 className="border-bottom pb-2 mb-3"><IoMdBasket icon="shopping-basket" className="mr-2" />Your Order</h6>
                                    {cartItemsList.length > 0 ? <div>
                                        <div>
                                            <ul>
                                                {this._renderCartItemsList()}
                                            </ul>
                                        </div>
                                        <div>
                                            <div className="row ">
                                                <div className="col-12">
                                                    <p style={{ backgroundColor: '#f1f3f8', padding: '10px 15px' }}>Total+ <span style={{ float: 'right', color: '#2f313a', fontSize: '14px', fontWeight: 700 }}><em>RS.{totalPrice}</em></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : <p className="text-success">There are no items in your basket.</p>}
                                    <div>
                                        <div className="row ">
                                            <div className="col-12">
                                                <button onClick={() => this.handleConfirmOrderBtn()} type="button" className="btn btn-warning btn-sm btn-block text-uppercase mr-2 mr-1 px-3"><b>Confirm Order</b></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        items: state.myFoods
    }
}

export default connect(mapStateToProps, {my_foods})(RestaurantDetails);