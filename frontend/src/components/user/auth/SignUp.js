
import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }


    render() {

        return (
            <div className='container default-text' >
                <div className='row  align-items-center' style={{ height: 500 }}>
                    <div className='col-12'>
                        <div className="row">
                            <div className="h1_place_holder">
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <h2 >Sign Up</h2>
                        </div>
                        <div className='row'>
                            <div className='h1_place_holder'></div>
                        </div>
                        <div className='row justify-content-center'>
                            <form onSubmit={this.handleSubmit} className='col-6'>
                                <div className='form-group row justify-content-center' >
                                    <label htmlFor='firstName' class="col-lg-3 col-form-label">First Name</label>
                                    <div className="col-lg-9">
                                        <input type="firstName" className="form-control" id="firstName" placeholder="Enter first name" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                <div className='form-group row justify-content-center' >
                                    <label htmlFor='lastName' className="col-lg-3 col-form-label">Last Name</label>
                                    <div className="col-lg-9">
                                        <input type="lastName" className="form-control" id="lastName" placeholder="Enter last name" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                <div className='form-group row justify-content-center' >
                                    <label htmlFor='email' className="col-lg-3 col-form-label">Email</label>
                                    <div className="col-lg-9">
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                <div className='form-group row justify-content-center'>
                                    <label htmlFor='password' className="col-lg-3 col-form-label">Password</label>
                                    <div className="col-lg-9">
                                        <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                <div className='form-group row justify-content-center'>
                                    <label htmlFor='profile' className="col-12 col-form-label">Profile</label>
                                    <div className="col-12">
                                        <textarea type="profile" className="form-control rounded-0" id="profile" placeholder="Enter profile" onChange={this.handleChange}></textarea>
                                    </div>
                                </div>
                                <div className='form-group row justify-content-center'>
                                    <button type="submit" className="col-12 default-btn" style={{ margin: 30, height: 45 }}>SIGN UP</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignUp

