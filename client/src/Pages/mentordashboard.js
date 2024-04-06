
import React, { useEffect } from 'react'
import axios  from 'axios'
const Mentordashboard = () => {
    useEffect(()=>{
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:5000/profileMentor').then((res)=>{
          console.log(res.data)
        }).catch(err=>console.log(err))

    },[])
  return (<>

    <div>dashboard</div>
    <label htmlFor='mentor-availability'>
        Availability
    <input id='mentor-availability' type='checkbox'/>
    </label>
        
  </>
  )
}

export default Mentordashboard