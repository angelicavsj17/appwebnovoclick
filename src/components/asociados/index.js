import React from 'react'

import img1hoyos from '../../assets/slide2100.png'
import img2hoyos from '../../assets/slide3100.png'
import img3hoyos from '../../assets/slide4100.png'

 function Carruselhoyos() {
     return(
         <div className="container-">
             <div className="cards1-section10">
    <img src={img1hoyos} />
<p>
is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled 
it to make a type specimen book.
</p> 
             </div>
<div>
    <img src={img2hoyos} />
    <p>
    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled 
it to make a type specimen book.   
    </p>
</div>

<div>
    <img src={img3hoyos} />
    <p>
    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled 
it to make a type specimen book.   
    </p>
</div>

         </div>

     )
     
 }
export default Carruselhoyos