import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <div>
      <ul className='menu'>
        <li onClick={() => navigate(-1)}>Geri</li>
        <li>
          <Link to={'/'}>Ana sayfa</Link>
        </li>
        <li>
          <Link to={'users'}>Kullanıcılar</Link>
        </li>
        <li>
          <Link to={'contact'}>İletişim</Link>
        </li>
        <li onClick={() => navigate(+1)}>İleri</li>
      </ul>
    </div>
  )
}

export default Header
