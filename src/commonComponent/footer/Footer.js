import React from 'react'
import { ImFacebook, ImTwitter, ImYoutube, ImTelegram } from "react-icons/im";
import "../footer/Footer.css"
function Footer() {
    return (
        <div className='main'  >
            <div className="container ">
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-3 col-lg-3  mt-3">
                        <h4 className='headStyle'>Company</h4>
                        <ul>
                            <li><a href='#'>
                                About Us</a>
                            </li>
                            <li><a href='#'>
                                Our Service</a>
                            </li>
                            <li><a href='#'>
                                Privacy Policy</a>
                            </li>
                            <li><a href='#'>
                                Affiliate Program</a>
                            </li>
                        </ul>

                    </div>

                    <div className='col-sm-12 col-md-3 col-lg-3 mt-3'>
                        <h4 className='headStyle'>Get Help</h4>
                        <ul>
                            <li><a href='#'>FAQ</a>
                            </li>
                            <li><a href='#'>Shipping</a>
                            </li>
                            <li><a href='#'>Return</a>
                            </li>
                            <li><a href='#'>Order Status</a>
                            </li>
                            <li><a href='#'>Payment Method</a>
                            </li>
                        </ul>

                    </div>
                    <div className='col-sm-12 col-md-3 col-lg-3 mt-3'>
                        <h4 className='headStyle'>Online Shop</h4>
                        <ul>
                            <li><a href='#'> Pizza </a>
                            </li>
                            <li><a href='#'>Special Burger</a>
                            </li>
                            <li><a href='#'>Pasta</a>
                            </li> <li><a href='#'>Chips</a>
                            </li>
                        </ul>

                    </div>

                    <div className='col-sm-12 col-md-3 col-lg-3 mt-3  mb-5'>
                        <h4 className='headStyle'>Follow Us</h4>
                        <span className='styleIcon'> <a id='Icons1' href='#'><ImFacebook /></a></span>
                        <span className='styleIcon'> <a id='Icons2' href='#'><ImTwitter /></a></span>

                        <span className='styleIcon'> <a id='Icons4' href='#'><ImTelegram /></a></span>

                    </div>
                </div>
            </div>
        </div>


    )


}
export default Footer;
