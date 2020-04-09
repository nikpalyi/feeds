import React from 'react';

const NewSingle = ({item}) => (
<div className='col s4'>
   <div className='card'>
      <div className='card-image'>
         <img src={item.urlToImage} alt={item.title} />
      </div>
   </div>
 </div>
);

export default NewSingle;