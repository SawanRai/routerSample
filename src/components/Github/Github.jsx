import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/SawanRai')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='text-center bg-gray-400 text-3xl m-4 p-4 text-white'>Github Follower: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

export const gitInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/SawanRai')
    return response.json()
}
