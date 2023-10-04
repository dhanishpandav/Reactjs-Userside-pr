import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import '../Header/header.css'
import { Navigate, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAsync } from '../../Sevices/Action/Action';


function Header() {
  const isLogin = useSelector(state => state.ProductReducer.isLogin);
    let allcartpr = useSelector(state => state.ProductReducer.product)
    // console.log(allcartpr, "cart item");
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className='container'>

            <div className="main-header d-flex justify-content-around align-items-center bg-light mt-2  ">
                <div className="logo">
                    <a href="https://www.freepnglogos.com/pics/amazon-png-logo-vector" title="Image from freepnglogos.com">
                        <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png" width="200" alt="woodland gardening amazon png logo vector" />
                    </a>
                </div>
                <div className="sign-to-update">
                    <span>
                        Delivering to Surat 394107
                    </span>
                    <p>
                        Sign in to update.
                    </p>
                </div>
                <div className="ac-list">
                    <span>Hello,sign in</span>
                    <p>Account & Lists</p>
                </div>
                <div className="orders">
                    <span>Returns & Orders</span>
                    <p>Order list</p>

                </div>
                <div className="orders">
                    <span>My Account</span>
                    <p>My Profile</p>

                </div>
                <div className="orders">
                    {
                   
                   isLogin ?     <button className='btn btn-warning' onClick={() => dispatch(LogoutAsync())}>Logout</button>
                   :

                  <button className='btn btn-success me-3' onClick={() => navigate('/signup')}>Sign up</button>
                    }
                  
                </div>
            
                <div className="cart" onClick={() => navigate('/cart')}>
                    <AddShoppingCartIcon  /><Badge bg="danger">{allcartpr.length}</Badge>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light nvcolor2">
                <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                    <ul className="navbar-nav text-white">
                        <li className="nav-item ">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.amazon.in/minitv?mtv_pt=external&refMarker=AVOD_gs_mw_BRND_EDU_GS_TXT_AD2&gclid=CjwKCAjw3oqoBhAjEiwA_UaLtvPmRraaH_y2GC3QKeVxDP1Wv56qB1fmLxAN09X1esUeHqR59An-rBoCwQEQAvD_BwE">Amazon miniTV</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/Electronic">Electronic</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link " href="#">Best Sellers</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Today's Deal </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">New Releases</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Customer Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Prime</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header