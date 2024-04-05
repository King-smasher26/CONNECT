
import React from 'react'
import axios  from 'axios'
const dashboard = () => {
  
  axios.get('http://localhost:5000/profileStudent').then((res)=>{
    console.log(res.data)
  }).catch(err=>console.log(err))
  return (
    <div>dashboard</div>
  )
}

export default dashboard