import React from 'react'
import './style.css'

function Register() {
    return (
        <div>
            <h2>Kayıt Ol</h2>
            <div className='auth-register'>
                <input placeholder='e-mail' />
                <input placeholder='password' type='password' />
            </div>
        </div>
    )
}

export default Register
