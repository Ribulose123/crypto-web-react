import React from 'react'
import { Link } from 'react-router-dom'
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'


const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className="logo-container">
            <img src='/my project/public/images/cryptocurrency (1).png' alt="" />
            <h2>Cryptoverse</h2>
        </div>

        <div className="nav-link">
            <div className="links">
                <HomeOutlined className='icons'/>
                <Link to="/">Home</Link>
            </div>
            <div className="links">
                <FundOutlined className='icons'/>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </div>
            <div className="links">
                <MoneyCollectOutlined className='icons'/>
                <Link to="/exchanges">Exchanges</Link>
            </div>
            <div className="links">
                <BulbOutlined className='icons'/>
                <Link to="/news">News</Link>
            </div>
        </div>

    </div>
  )
}

export default Navbar
