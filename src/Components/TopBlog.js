import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

function TopBlog(){
  const blogUrl = 'https://blogbackendproject.cybpact.com/'

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
      <h4>Top Blogs</h4>
      <ul id="bloglisting">
        {blogs}
      </ul>
    </>
  )
}

export default TopBlog