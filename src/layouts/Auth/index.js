import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.css'

function AuthLayout() {
  return (
    <div className='auth-container'>
      <div className='nav'>
        <Link to="/auth">Giriş Yap</Link>
        <Link to="/auth/register">Kayıt Ol</Link>
      </div>
      <hr />
      <Outlet />
    </div>
  )
}

export default AuthLayout
