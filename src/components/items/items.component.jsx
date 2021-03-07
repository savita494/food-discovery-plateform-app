import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
  import HotelPageHyderabad from '../../pages/hotelpagehyderabad/hotelpagehyderabad.components'
//  import HotelPageHyderabad from '../../pages/hotelpagekochi/hotelpagekochi.components'
//  import HotelPageHyderabad from '../../pages/hotelpagebangalore/hotelpagebangalore.components'

import './items.styles.scss';

const Items = ({ title, imageUrl, size, history, linkUrl, match }) => (
 <div>

<Link className='lnkClassList' to={"/hotelpagehyderabad.components"}>

  <div
    className={`${size} items`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >  
   

    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />

    <div className='content'>
      
      <h1 className='title'>{title}</h1>
      

      
    </div>
    

    
  </div>
  </Link>
  </div>

  
);

export default withRouter(Items);
