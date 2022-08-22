


import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/productSlice.js';
import { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import addt from "../../assets/addt.png"
import { add } from '../../store/AddCountSlice.js';




import axios from 'axios';


function ProductCard() {
    const { data, status } = useSelector((state) => state.product)
     






    const dispatch = useDispatch()












    useEffect(() => {
        dispatch(fetchProduct())



    }, [])


    // Order Now


    const createCart = async (id, name, price, pro) => {

        const baseURL = process.env.REACT_APP_BASEURL;


        const url = `${baseURL}/carts/createCart`;


        await axios.post(url, {
            product: id,

            quantity: "1",
            name: name,
            price: price,




        }).then((result2, err) => {
            console.log(result2);
            alert("Your product addToCard")
            if (err) {
                console.log(err);
            }
        }


        ).catch(err => { console.log(err); })
    }




    return (
        <div>
            <div className="container">
                <div className="row ">

                    {
                        data.map((cat, i) => {

                            return <div className='col-lg-3 col-sm-12 col-md-3  mt-3  '  >
                                <div className="card" >
                                    <img src={cat.image} className="card-img-top" alt="cardImages" />
                                    <div className="card-body">

                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                                            <p>{cat.name}</p>
                                            <p>{cat.price}</p>



                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >                                <span><AiFillStar />4.7 50-79 min</span>
                                            <p onClick={() => createCart(cat._id, cat.name, cat.price)}><img src={addt} /></p>
                                        </div>



                                    </div>

                                </div>
                            </div>


                        })
                    }


                </div>


            </div>


        </div>





    )
}


export default ProductCard



