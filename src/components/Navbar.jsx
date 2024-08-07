import React from 'react'
import { Link } from "react-router-dom";
import { Button, Typography, Menu,Avatar } from "antd";
import { HomeOutlined, FundOutlined,MoneyCollectOutlined,BulbOutlined } from '@ant-design/icons';
import icon from "../images/my.png";

const Navbar = () => {
  return (
    <div className='nav-container'>
    <div className='logo-container'>
    <Avatar src={icon} size={64}/>
    <Typography.Title level={2} className='logo'>
      <Link to="/">AssetVerse</Link>
    </Typography.Title>
{/* <Button className='menu-control-container'>

</Button> */}

    </div>
    <Menu theme='dark'>
      <Menu.Item icon={<HomeOutlined/>}>
        <Link to='/'>Home</Link>
      </Menu.Item>
     
      <Menu.Item icon={<FundOutlined/>}>
        <Link to='/cryptocurrencies'>Crytocurrencies</Link>
      </Menu.Item>  
      
      <Menu.Item icon={<MoneyCollectOutlined/>}>
        <Link to='/exchanges'>Exchanges</Link>
      </Menu.Item> 
      
       <Menu.Item icon={<BulbOutlined/>}>
        <Link to='/news'>News</Link>
      </Menu.Item> 
    
    </Menu>

    </div>
   
  )
}

export default Navbar