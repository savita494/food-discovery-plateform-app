import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as FoodLogo } from '../../assets/foodlogo.png';

const Header = () => (
    <div className="header">
        
        <img  width = "100px" height="100px" src="https://i.pinimg.com/originals/71/0a/26/710a26d2c8b24b71f99d4714bce66225.png"/>
    <div className='options'>
         <Link className='option' to='/'>
        CONTACT
         </Link>
      
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      
      
      </div>
      </div>

)

export default Header;