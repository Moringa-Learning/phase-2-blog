import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

function TopBlog(){
  const blogUrl = 'https://phase2backend.herokuapp.com/blogs'

  const [blogList, setblogList] = useState([])

  useEffect(() => {
    fetch(blogUrl, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setblogList(data)
      })
  }, [])

  const blogs = blogList.map(blogitem => {
    return <li><Link to={`/blogdetail/${blogitem.id}`}>{blogitem.title}</Link></li>
  })

  return (
    <>
      <div>Top Blogs</div>
      <ul>
        {blogs}
      </ul>
    </>
  )
}

export default TopBlog