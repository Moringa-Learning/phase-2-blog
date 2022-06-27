import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

function BlogDetail(){
  const { id } = useParams()
  const [ blogObject, setblogObject ] = useState()

  useEffect(()=>{
    const blogUrl = `https://phase2backend.herokuapp.com/blogs/${id}`
    console.log('working'+id)
    fetch(blogUrl).then(res => res.json()).then(reps => setblogObject(reps))
  },[id])
  console.log(id)
  console.log(blogObject)
  return (
    <Container className='p-2'>
      <div className='blogImage bg-success'>
        <img src={blogObject ? blogObject.image : "https://bamusholdings.com/images/joomlart/demo/default.jpg"} alt="" width={600} />
      </div>
      <div>
        <h3 className="mt-3">{blogObject ? blogObject.title : ""}</h3>
        <div className='d-flex justify-content-left align-items-center mt-4 mb-4'>
          <span>{blogObject ? blogObject.postedDate : ""}</span>
          <span className="ms-3">Read time {blogObject ? blogObject.readTime : 0} mins</span>
        </div>
        <p>{blogObject ? blogObject.blogdata : 0}</p>
      </div>
    </Container>
  )
}

export default BlogDetail