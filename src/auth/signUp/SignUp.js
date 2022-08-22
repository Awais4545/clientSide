import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../signUp/SignUp.css"

function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("");

    const navigate = useNavigate()

    const [password_confirm, setPassword_Confirm] = useState("");

    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate("/")
        }

    })

    const RegisterUser = async () => {
        try {
            const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
            if (regEx.test(email)) {
                setMessage("Valid Email");
            } else if (!regEx.test(email`enter code here`) && email !== "") {
                setMessage("Invalid email");
            } else {
                setMessage("");
            }

            if (!name || !email || !password || !password_confirm) {
                return alert("please enter all field")
            }

            if (password !== password_confirm) {
                return alert(" password and confirm ")
            }
            const baseURL = process.env.REACT_APP_BASEURL;


            await axios.post(`${baseURL}/auth/register`, {

                name: name,
                email: email,
                password: password,
                password_confirm: password_confirm,
            }).then((resul, err) => {
                localStorage.setItem("user", JSON.stringify(resul))
                if (err) {
                    return alert("plesae enter correct info")
                } else {
                    alert("your register done")
                }

            })
        } catch (error) {
            console.log(error);

        }

    }










    return (

        <div>
            <div className="container">
                <div className="row  mt-5">
                    <div className="col-sm-12 col-md-4 col-lg-4 "></div>

                    <div className="col-sm-12 col-md-4 col-lg-4   divStyle">
                        <h3 className='text-center mt-2 fw-bold' >WELCOME</h3>

                        <div className='body1  mt-4'>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder='Enter a name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" placeholder='Enter a Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"   >Password</label>
                                <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" placeholder='Confirm Password' value={password_confirm} onChange={(e) => setPassword_Confirm(e.target.value)} />
                            </div>

                            <div className='mt-4 text-center mb-5'>
                                <button type="button" className="btn btn-dark  text-center textStyle1" onClick={() => RegisterUser()}  >SIGN UP</button>


                            </div>


                        </div>


                    </div>




                </div>
            </div>
        </div>


    )
}

export default SignUp;
