import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../login/Login.css"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const LoginUser = async () => {

        try {

            if (!email || !password) {
                return alert("please enter all field")
            }
            const baseURL = process.env.REACT_APP_BASEURL;

            await axios.post(`${baseURL}/auth/login`, {

                email: email,
                password: password,
            }).then((resulting, err) => {
                console.log(resulting);



                if (resulting.data.token) {
                    console.log(resulting.token);
                    localStorage.setItem("user", JSON.stringify(resulting.data))
                    alert("LOGIN DONE")
                    console.log(email);
                    navigate("/")


                }
                if (err) {
                    console.log(err);
                    alert("invalid data enter")
                }

            })


        } catch (error) {
            console.log(error);
            alert("you have already register")

        }

    }


    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate("/")
        }

    })






    return (
        <div>



            <div className="container mainContainer ">
                <div className="row   mt-5">
                    <div className=" col-lg-4 col-md-4 ">
                    </div>

                    <div className="col-sm-9 col-lg-4 col-md-4  divup">
                        <h2 className='text-center mt-4  '>WELCOME</h2>

                        <div className='body  pt-3'>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label textStyle">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="inputPassword" className="form-label textStyle">Password</label>
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                            </div>
                            {/* Button */}
                            <div className='text-center mb-4 mt-4'>
                                <button type="button" className="btn btn-dark text-center  btnStyle" onClick={() => LoginUser()}  >LOGIN</button>
                            </div>


                        </div>




                    </div>
                </div>
            </div>
        </div>



    )
}

export default Login

