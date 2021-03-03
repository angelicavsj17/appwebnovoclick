import React from "react"
import '../itemcliente/itemcliente.css'
import itemClientes1 from '../../assets/mesadetrabajo71.png?cachebust=%REACT_APP_CACHE_BUST%'
import itemClientes2 from '../../assets/mesadetrabajo72.png?cachebust=%REACT_APP_CACHE_BUST%'
import itemClientes3 from '../../assets/mesadetrabajo73.png?cachebust=%REACT_APP_CACHE_BUST%'
import itemClientes4 from '../../assets/mesadetrabajo74.png?cachebust=%REACT_APP_CACHE_BUST%'

import itemclienteduc1 from '../../assets/renglonuniversitario1.png'
import itemclienteduc2 from '../../assets/renglonuniversitario2.png'
import itemclienteduc3 from '../../assets/renglonuniversitario3.png'
import itemclienteduc4 from '../../assets/educ.png'


import itemclienteinmo1 from '../../assets/inmo.png'
import itemclienteinmo2 from '../../assets/inmo1.png'
import itemclienteinmo3 from '../../assets/inmo2.png'
import itemclienteinmo4 from '../../assets/inmo3.png'

function ItemCliente () {
     return(
         <div className="container-slider">
         <div className="slideitem">
            <h1>Sector Automotriz</h1>
             <ul>
                 <li><img alt='item-client-1' src={itemClientes1}/></li>
                 <li><img alt='item-client-2' src={itemClientes2}/></li>
                 <li><img alt='item-client-3' src={itemClientes3}/></li>
                 <li><img alt='item-client-4' src={itemClientes4}/></li>
             </ul>
         </div>

         <div className="slideitem">
            <h1>Sector Educacion</h1>
             <ul>
                 <li><img src={itemclienteduc1}/></li>
                 <li><img src={itemclienteduc2}/></li>
                 <li><img src={itemclienteduc3}/></li>
                 <li><img src={itemclienteduc4}/></li>
             </ul>
         </div>
         
         <div className="slideitem">
            <h1>Sector Inmobiliario</h1>
             <ul>
                 <li><img src={itemclienteinmo1}/></li>
                 <li><img src={itemclienteinmo2}/></li>
                 <li><img src={itemclienteinmo3}/></li>
                 <li><img src={itemclienteinmo4}/></li>
             </ul>
         </div>

         </div>
     )
 }
export default ItemCliente; 
