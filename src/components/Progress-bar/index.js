import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { propTypes } from 'react-bootstrap/esm/Image';

 function ProgressBar(props) {
     return(
         <div>
<div className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
role="progressbar"
style={{width: props.porcentaje ? props.porcentaje + "%": "100%" }}
>

</div>
         </div>
     )
 }

  export default ProgressBar;