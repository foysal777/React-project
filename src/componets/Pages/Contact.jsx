import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div> 

      <div> Contace page <br />
        
      <button  onClick= {()=>{navigate('/')}}  className=' p-2 bg-amber-600 rounded-4xl'>Go to Homepage</button>

         </div>
      
    
    </div>
  )
}

export default Contact