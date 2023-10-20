import React from 'react'
import { Link } from 'react-router-dom'
import "./Directory.css";

const Directory = ({name,posts , userIds}) => {
  
  return (
      <>
         <Link to={`/userDetail/${userIds}`} className="directory-link">
      <div className="directory-card">
        <h2 className="directory-info"><strong>Name:</strong> {name}</h2>
        <h2 className="directory-info"><strong>Posts:</strong> {posts}</h2>
      </div>
    </Link>
      </>
    
  )
}

export default Directory