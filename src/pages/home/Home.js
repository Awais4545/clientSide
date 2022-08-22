import React from 'react'
import Banner from '../../commonComponent/banner/Banner'
import Footer from '../../commonComponent/footer/Footer'
import ProductCard from "../../commonComponent/productCard/ProductCard"
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'


export default function Home() {




    
    return (
        <div>

            <Banner />
            {/* <div className="container">
                <h5 className="mt-5">Home Kitchen</h5>

                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                    <label className="btn btn-outline-warning" for="btnradio1">All</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                    <label className="btn btn-outline-warning" for="btnradio2">Button</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                    <label className="btn btn-outline-warning" for="btnradio3">Free Delivery</label>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                    <label className="btn btn-outline-warning" for="btnradio4">New</label>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autocomplete="off" />
                    <label className="btn btn-outline-warning" for="btnradio5">Coming</label>

                </div>


            </div> */}
            <ProductCard />
            <ProductCard />
            <Blog />
            <Contact />
            <Footer />



        </div>


    )
}
