

import React from 'react';
import { NavLink } from "react-router-dom";

import { useNavigate } from 'react-router-dom'
import "../navBar/NavBar.css"
import { BiSearch } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux"


function NavBar() {
    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : "normal",

        }
    }

    const navigate = useNavigate()

    const auth = localStorage.getItem("user");




    const LogOut = () => {
        alert("LOGOUT SUCCESSFUL")
        localStorage.clear();
        navigate("/login")

    }

    const searchdata = () => {
        navigate("/SearchProduct")
    }



    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: "#1AC073" }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#" style={{ color: 'black', fontWeight: "bold" }}>WHAT2EAT
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        {



                            (auth) ?



                                <>

                                    <ul className="navbar-nav m-auto">

                                        <li className="nav-item" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove  fw-bold  styleText" aria-current="page" to="/">Home</NavLink>
                                        </li>

                                        <li className="nav-item" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove fw-bold  styleText" aria-current="page" to="/About">About</NavLink>
                                        </li>

                                        <li className="nav-item" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove fw-bold styleText" aria-current="page" to="/Blog">Blog</NavLink>
                                        </li>

                                        <li className="nav-item" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove fw-bold styleText" aria-current="page" to="/Contact">Contact</NavLink>
                                        </li>


                                        <li className="nav-item">
                                            <NavLink style={navLinkStyle} className="nav-link active hove   fw-bold   styleText" onClick={() => LogOut()} aria-current="page" to="/login">LogOut</NavLink>
                                        </li>

                                    </ul>

                                    <div className="d-flex " role="search">
                                        <li className="nav-item" style={{ display: "flex", flexDirection: "row", marginRight: "10px" }}>


                                            <button type="button" class="btn btn-dark text-bold" onClick={() => searchdata()} style={{ marginRight: "10px" }} >
                                                <BiSearch style={{ fontSize: 20, fontWeight: "bold" }} />

                                                Search</button>

                                            <button type="button" class="btn btn-light" style={{ display: "flex", flexDirection: "row", }}>
                                                <MdOutlineAddShoppingCart style={{ fontSize: 20, fontWeight: "bold" }} />


                                                <NavLink className="nav-link active hove   fw-bold   styleText" aria-current="page" to="/addTocart">AddToCart</NavLink>
                                            </button>

                                        </li>



                                    </div>

                                </>

                                :
                                <>

                                    <ul className="navbar-nav ms-auto">

                                        <li className="nav-item">
                                            <NavLink style={navLinkStyle} className="nav-link active hove" aria-current="page" to="/login">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={navLinkStyle} className="nav-link active hove " aria-current="page" to="/signUp">SignUp</NavLink>
                                        </li>
                                    </ul>
                                </>










                        }






                    </div>
                </div>
            </nav >










        </div >













    );
}

export default NavBar;


