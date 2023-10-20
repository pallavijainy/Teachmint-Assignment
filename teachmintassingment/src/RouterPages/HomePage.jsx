import React, { useEffect, useState } from 'react';
import axios from "axios";
import Directory from '../component/Directory/Directory';

const HomePage = () => {
    const [user,setUser] = useState([]);
    const [obj , setObj] = useState({})
    const [posts,setPosts] = useState([])
    const [countPost , setCountPost] = useState(false)
    const getUserData = async()=>{
       const response = await axios.get("https://jsonplaceholder.typicode.com/users");
       setUser(response.data)
    }

    const getAllPosts = async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data)
    }

    useEffect(()=>{
 
        getUserData()
        getAllPosts()
    },[])



useEffect(()=>{ 
    let object = {};
   posts.forEach((el)=>{
    object[el.userId] === undefined ? object[el.userId] = 1 : object[el.userId]++;
     })
    setObj(object);
 setCountPost(true);
      
},[posts])

  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , width:"80%" , margin:"auto" ,padding:"2%"}}>
  
  <h1 style={{textAlign:"center"}}>User Directory</h1>
    {countPost && user.map((el)=>(
      
        <Directory name = {el?.name} posts = {obj[el.id]} userIds = {el.id}/>

    ))}
    </div>
  )
}

export default HomePage