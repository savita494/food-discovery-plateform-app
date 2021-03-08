import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
  import HotelPageHyderabad from '../../pages/hotelpagehyderabad/hotelpagehyderabad.components';
  //import HotelPageHyderabad from '../../pages/hotels/hotels.components'
  import Hotelpagebangalore from '../../pages/hotelpagebangalore/hotelpagebangalore.components';
  import Hotelpagekochi from '../../pages/hotelpagekochi/hotelpagekochi.components';

import './items.styles.scss';

class Item extends Component
 {
   //   constructor()
//   {    super();
// //imageUrl, size, history, linkUrl, match}

//   }

  render()
  {      
     
     if(this.props.imageUrl=='https://static.toiimg.com/photo/71775173.cms')
  {
    return(
      <div>
        <Link className='lnkClassList' to={"/kochi"}>
        <div
        className={` items`}

  >
    <div       className='background-image'
      style={{
        backgroundImage: `url(${this.props.imageUrl})`     }}
   /> 
    <div className='content'>
           <h1 className='title'>{this.props.title}</h1>
          </div>
          </div>
</Link>
  </div>
    )
  }
  else if(this.props.imageUrl=='https://etimg.etb2bimg.com/photo/73411431.cms'){
    return(
      <div>
        <Link className='lnkClassList' to={"/hyderabad"}>
        <div
        className={` items`}

  >
    <div       className='background-image'
      style={{
        backgroundImage: `url(${this.props.imageUrl})`     }}
   /> 
    <div className='content'>
           <h1 className='title'>{this.props.title}</h1>
          </div>
          </div>
</Link>
  </div>
    )

  }
  else{

    return(
      <div>
        <Link className='lnkClassList' to={"/bangalore"}>
        <div
    className={` items`}
  >
    <div       className='background-image'
      style={{
        backgroundImage: `url(${this.props.imageUrl})`     }}
   /> 
    <div className='content'>
           <h1 className='title'>{this.props.title}</h1>
          </div>
          </div>
  
</Link>
  </div>
    )
  }

    
           
  }

}
export default Item;


// const  Items = ({ title, imageUrl, size, history, linkUrl, match }) => (
//  <div>
// <Link className='lnkClassList' to={"/hyderabad"}>
 //   <div
//     className={`${size} items`}
//     onClick={() => history.push(`${match.url}${linkUrl}`)}
//   >  
//     <div
//       className='background-image'
//       style={{
//         backgroundImage: `url(${imageUrl})`
//       }}
//     /> 
//     <div className='content'>
      //       <h1 className='title'>{title}</h1>
      //     </div>
    //   </div>
//   </Link>
//   <Link className='lnkClassList' to={"/hyderabad"}>
 

//   <div
//     className={`${size} items`}
//     onClick={() => history.push(`${match.url}${linkUrl}`)}
//   >  


//     <div
//       className='background-image'
//       style={{
//         backgroundImage: `url(${imageUrl})`
//       }}
//     /> 


//     <div className='content'>
      
//       <h1 className='title'>{title}</h1>
      

      
//     </div>
    

    
//   </div>
//   </Link>
//   <Link className='lnkClassList' to={"/hyderabad"}>
 

//  <div
//    className={`${size} items`}
//    onClick={() => history.push(`${match.url}${linkUrl}`)}
//  >  


//    <div
//      className='background-image'
//      style={{
//        backgroundImage: `url(${imageUrl})`
//      }}
//    /> 


//    <div className='content'>
     
//      <h1 className='title'>{title}</h1>
     

     
//    </div>
   

   
//  </div>
//  </Link>


//   </div>

  
// );

// export default withRouter(Items);
