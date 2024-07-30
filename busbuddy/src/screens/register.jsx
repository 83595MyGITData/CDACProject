import { useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

function Register()
{
    const navigate=useNavigate()
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[address,setAddress]=useState('')
    const[gender,setgender]=useState('')
    const[age,setAge]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')

    const onRegister=()=>{
        if(firstName.length==0)
        {   
            toast.error("Enter FirstName")
        }
        else if(lastName.length==0)
        {
            toast.error("Enter LastName")
        }
        else if(email.length==0)
            {
                toast.error("Enter email")
            }
        else if(phone.length==0)
        {
            toast.error("Enter Phone")
        }
        else if(address.length==0)
        {
            toast.error("Enter Address")
        }
        else if(password.length==0)
        {
            toast.error("Enter password")
        }
        else if(confirmPassword.length==0)
        {
            toast.error("Enter ConfirmedPassword")
        }
        else if(password!=confirmPassword)
        {
            toast.error("Password mismatched")
        }
        else{
        navigate('/login')}
    }
    return(
        <div>
            <h1 className="page-header">Register</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form">

                    <div className="mb-3">
                        <label htmlFor="" className="">First Name</label>
                        <input 
                        onChange={(e)=>setFirstName(e.target.value)}
                        type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="">Last Name</label>
                        <input 
                        onChange={(e)=>setLastName(e.target.value)}
                        type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="">Email</label>
                        <input 
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="">Phone</label>
                        <input 
                        onChange={(e)=>setPhone(e.target.value)}
                        type="phone" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="">Address</label>
                        <input 
                        onChange={(e)=>setAddress(e.target.value)}
                        type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="">Age</label>
                        <input 
                        onChange={(e)=>setAge(e.target.value)}
                        type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="">Gender</label>
                        <br></br>
                        <input 
                        // onChange={(e)=>setGender(e.target.value)}
                        type="radio" name="Male" value="M" />
                        <label for="Male">Male</label>
                        <input 
                         //onChange={(e)=>setGender(e.target.value)}
                        type="radio" name="Female" value="F" />
                        <label for="Female">Female</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="">Password</label>
                        <input 
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="">Confirm Password</label>
                        <input 
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        type="text" className="form-control" />
                    </div>
                    <div className="mb-3">

                    <div className="mb-3">
                    
                    <button on onClick={onRegister} className="btn btn-success mb-3">Register</button>

                    </div>
                    </div>
                                       
                    </div>
                    

                </div>
                <div className="col"></div>
            </div>
            
        </div>
    )
}
export default Register