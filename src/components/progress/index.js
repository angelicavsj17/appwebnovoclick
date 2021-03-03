import React from 'react'

 const Progress= ({done})=> {

     return(

<div className="progress">
    <h1>progreso</h1>
<div className="progress-done" style={{opacity:1, width:` {done}%` }}>
{done}%
</div>
</div>
     )

 }

 export default Progress

