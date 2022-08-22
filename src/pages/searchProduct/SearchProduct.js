import axios from 'axios'
import React, { useState } from 'react'

function SearchProduct() {

    const [name, setName] = useState("")
    const [filtData, setFiltData] = useState([])

    const searchdata = async (name) => {
        if (!name) {
            return alert("Please Enter Search Product")

        }


        const baseURL = process.env.REACT_APP_BASEURL;
        await axios.get(`${baseURL}/products/search/${name}`).then((resu, err) => {

            setFiltData(resu.data)
            console.log(resu.data);
            if (resu.data.length == 0) {
                alert("not item found")
            }


            if (err) {
                console.log(err);
            }
        })
    }





    return (
        <div>
            <div className="container">
                <div className="row ">
                    <div className="col-md-3 col-lg-3"></div>



                    <div className="text-center col-md-6 col-sm-12 col-lg-6  mt-5">

                        <input class="form-control" list="datalistOptions" id="exampleDataList" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter a Search Item" />
                        <button onClick={() => (searchdata(name))} className="btn btn-success mt-3">Search</button>

                    </div>
                    <div className="col-md-3 col-lg-3"></div>

                </div>




                <div className="row mt-3">
                    <div className="col-sm-12 col-md-6 col-lg-6 ">
                        <h2>Search Found:</h2>
                    </div>
                </div>


                <div className="row mt-3">






                    {



                        filtData.map((data, i) => {


                            return <div className='col-lg-3 col-sm-12 col-md-3  mt-3  ' key={i}  >
                                <div className="card" >
                                    <img src={data.image} className="card-img-top" alt="cardImages" />
                                    <div className="card-body">
                                        <p>Title : {data.name}</p>
                                        <p>Price : {data.price}</p>




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
export default SearchProduct