
import React, { Component } from 'react'


class SignIn extends Component {

    state = {
        email: '',
        password: ''
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
                        <div className='row justify-content-center'>
                            <h2 >Sign In</h2>
                        </div>
                        <div className='row'>
                            <div className='h1_place_holder'></div>
                        </div>
                        <div className='row justify-content-center'>
                            <form onSubmit={this.handleSubmit} className='col-6'>
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
                                        <button type="submit" className="col-12 default-btn" style={{ margin: 30, height: 45 }}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default SignIn
