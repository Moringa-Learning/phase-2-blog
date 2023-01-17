import React, { useState, useEffect } from 'react';
import './styles/compStyles.css'
import BlogCard from "./BlogCard"

function Blog(){
  const blogUrl = 'http://localhost:9003/blogs'

  const [ blogList, setblogList ] = useState([])

  useEffect(()=>{
    fetch(blogUrl, {method:'GET'})
      .then(response => response.json())
      .then(data=>{
        setblogList(data)
      })
  }, [])

  const blogs = blogList.map(blogitem => {
    return <BlogCard key={blogitem.id} blogdt={blogitem} />
  })
  
  return (
    <div className="mainblog m-2 p-2">
      {blogs}
    </div>
  )
};

export default Blog