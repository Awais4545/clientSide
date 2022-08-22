import React from 'react'
import "../banner/Banner.css"
import Character from "../../assets/Character.png"
import axios from 'axios'

function Banner() {






  return (
    <div className='mainBanner'>


      <div className="container ">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5 mt-5 mb-5">
            <h1 id='styleTextBanner' className='mt-5'> Authentic Home food in UK</h1>
            <p id="styleTextPar">What2Eat is a courier service in which authentic home cook food is delivered to a customer.</p>
            <form className="d-flex w-80 " role="search" >
              <input className="form-control  " type="search" placeholder="Search food you love" aria-label="Search" />
              <button className="btn btn-warning" type="submit">Search</button>
            </form>
          </div>
          <div className="col-sm-12  offset-1 col-lg-6 col-md-6  boxBanner1  text-center mt-5  mb-5 " style={{ display: "flex", flexDirection: "row", }}>

            <img src={Character} style={{ justifyContent: "flex-end" }} />

          </div>



        </div>
      </div>




























    </div>



  )
}
export default Banner
