import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import UserPost from '../component/UserPost';
import "./UserDetail.css"

const UserDetail = () => {
    const [user,setUser] = useState([]);
    const [posts,setPosts] = useState([])
    const [country,setCountry] = useState([])
    const [time,setTime] = useState("")
    const [start,setStart] = useState(true)
     const{id} = useParams();
   
    const getUserData = async()=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data)
     }
 
     const getAllPosts = async()=>{
         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
         setPosts(response.data)
     }
     const getCountries = async()=>{
        const response = await axios.get("http://worldtimeapi.org/api/timezone");
        setCountry(response.data)
     }
     const getTimeByCountry = async(countryname)=>{
         const response = await axios.get(`http://worldtimeapi.org/api/timezone/${countryname}`)
         console.log(response.data,"pallavi")
let datetimeString = response.data.utc_datetime
         const datetime = new Date(datetimeString);
         const hours = datetime.getUTCHours();
         const minutes = datetime.getUTCMinutes();
         const seconds = datetime.getUTCSeconds();
const timeString = `${hours}:${minutes}:${seconds}`;
         setTime(timeString)
     }


     const handlePauseStart = ()=>{
       setStart(!start)
     }
     useEffect(()=>{
         getUserData()
         getAllPosts()
         getCountries()
         getTimeByCountry("Africa/Abidjan")
     },[])

     useEffect(()=>{
      let intervalId;
      if (start) {
        intervalId = setInterval(() => {
          let [hr, min, sec] = time.split(':').map(Number);
          if(sec === 59 ){min += 1 ; sec = 0};
          if(sec === 59 && min === 59 ){hr += 1};
         sec+=1 
        const timeString = `${hr}:${min}:${sec}`;
          setTime(
            timeString
          );
        }, 1000);
      } else {
        clearInterval(intervalId);
      }
      return () => clearInterval(intervalId);
     },[start,time])
  return (

    <div className="user-detail">

<div id="first-box">
<Link to="/">
        <button className="back-button">Back</button>
      </Link>

      <div id='three-options'>
      <div className="timezone-selector">
        <select name="" id="" onChange={(e)=>getTimeByCountry(e.target.value)}>
            {country.map((el)=>(
                <option value={el}>{el}</option>
 )
                  )}
        </select>
    </div>

    <div className="current-time">{time}</div>
    <button className="pause-start-button" onClick={()=>handlePauseStart()}>Pause/Start</button>
      </div>
    
</div>

  <h1 className="profile-header" style={{textAlign:"center"}}>Profile Page</h1>
<div className="profile-container">
  <div className="user-info">
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username} | Catch phrase: <span className="catch-phrase">{user?.company?.catchPhrase}</span></p>
    </div>
    <div>
      <p className="address">
        Address: {user?.address?.city}, {user.address?.street}
      </p>
      <p className="contact-details">Email: {user.email} | Phone: {user.phone}</p>
    </div>
  </div>
</div>


<div className="user-posts">
        {posts.map((el) => (

         <UserPost title={el.title} body={el.body}/>
        ))}
      </div>

    </div>
  
  )
}

export default UserDetail;