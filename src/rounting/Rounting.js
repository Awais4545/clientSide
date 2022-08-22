import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Blog from "../pages/blog/Blog"
import Menu from "../pages/menu/Menu"
import Contact from "../pages/contact/Contact"
import NavBar from '../commonComponent/navBar/NavBar';
import PrivateRounting from './PrivateRouting';
import LogOut from "../auth/logOut/LogOut.js"
import Login from "../auth/login/Login.js"
import AddToCart from '../pages/addToCart/AddToCart';
import SignUp from "../auth/signUp/SignUp.js"
import SearchProduct from '../pages/searchProduct/SearchProduct';
function Rounting() {

    return (
        <BrowserRouter>
            <NavBar />


            <Routes>
                <Route element={
                    <PrivateRounting />}>

                    <Route
                        path="/"
                        element={
                            <Home />

                        }
                    />
                    <Route
                        path="/About"
                        element={
                            <About />

                        }
                    />
                    <Route
                        path="/Blog"
                        element={
                            <Blog />

                        }
                    />
                    <Route
                        path="/Menu"
                        element={
                            <Menu />

                        }
                    />
                    <Route
                        path="/Contact"
                        element={
                            <Contact />

                        }
                    />
                    <Route
                        path="/SearchProduct"
                        element={
                            <SearchProduct />

                        }
                    />
                    <Route
                        path="/addToCart"
                        element={
                            <AddToCart />

                        }
                    />
                    <Route
                        path="/LogOut"
                        element={
                            <LogOut />

                        }
                    />




                </Route>


                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />





            </Routes>


        </BrowserRouter>
    )
}
export default Rounting