import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../store/AddSlice';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { STATUS } from "../../store/productSlice"



function AddToCart() {
    const { data, status } = useSelector((state) => state.cardAdd)

    const count = useSelector((state) => state.counter.count)

    const [data1, setData1] = useState([])
    const dispatch = useDispatch()





    useEffect(() => {
        dispatch(fetchCart())



    }, [])



    if (status === STATUS.LOADING) {
        return <h2 style={{ color: "green" }}>Loading......</h2>
    }

    if (status === STATUS.ERROR) {
        return <h2>ERROR</h2>
    }

    // delete product 
    const deleteData = async (id) => {

        try {
            const baseURL = process.env.REACT_APP_BASEURL;

            await axios.delete(`${baseURL}/carts/deleteCart/${id}`)

            const newProduct = data.filter((newPro) => {
                return newPro.id != id
            },


            )
            setData1(newProduct)



            alert("AD DELETE DONE")
        } catch (error) {
            console.log(error);
        }

    }











    const date = new Date()





    // order place

    const FinalOrder = async (id, name, price) => {
        const baseURL = process.env.REACT_APP_BASEURL;

        const url = `${baseURL}/order/createOrder`;


        await axios.post(url, {
            product: id,

            quantity: "1",
            name: name,
            price: price,
            date: date,



        }).then((result2, err) => {
            console.log(result2);
            alert("your order done Please wait one Hour  ")
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
                    <h2 className='text-center mt-5' style={{ color: "green" }}>Add to Carts</h2>
                    <marquee direction="left" height="100" width="200" Color="red">Location Send Otherwise Order not Done ThankYou</marquee>


                    {
                        data.map((ca, i) => {

                            return <div className='col-lg-4 col-sm--12 col-md-4  mt-3  '  >
                                <div className="card" >
                                    <div className="card-body">
                                        <h4 className='text-danger'> {ca.name}  </h4>
                                        <p className='fw-bold  '>RS. {ca.price}</p>


                                        <br />
                                        <br />
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                            <button className='btn btn-danger' onClick={() => deleteData(ca._id)}>Delete</button>

                                            <button type='button' className='  btn btn-success   fw-bold' onClick={() => FinalOrder(ca._id, ca.name, ca.price)}>Order</button>
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


export default AddToCart




