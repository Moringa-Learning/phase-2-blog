import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

function BlogDetail(){
  const { id } = useParams()
  const [ blogObject, setblogObject ] = useState()

  useEffect(()=>{
    const blogUrl = `https://phase2backend.herokuapp.com/blogs/${id}`

    fetch(blogUrl)
      .then(response => response.json())
      .then(result => {
        setblogObject(result)
    })
  }, [])

  console.log(blogObject)

  return (
    <Container className='p-2'>
      <div className='blogImage bg-success'>
        <img src={blogObject.image} alt="" width={400} />
      </div>
      <div>
        <h3 class="mt-3">{blogObject.title}</h3>
        <div className='d-flex justify-content-left align-items-center mt-4 mb-4'>
          <span>{blogObject.postedDate}</span>
          <span className="ms-3">Read time {blogObject.readTime}mins</span>
        </div>
        <p>{blogObject.blogdata}</p>  
      </div>
    </Container>
  )
}

export default BlogDetail