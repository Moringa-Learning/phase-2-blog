import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { Form, Button, InputGroup, Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function BlogCreate(){
  const current = new Date();

  const [errors, setErrors] = useState([])
  const [formData, setformData] = useState({
    id: nanoid(),
    image: '',
    blogdata: '',
    readTime: 0,
    postedDate: `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`,
    title: ''
  });
  const navigate = useNavigate();


  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setformData({...formData, [name]: value})
  }


  function handleSubmit(event) {
    event.preventDefault();
    const blogUrl = 'https://blogbackendproject.cybpact.com/'

    if (formData.title.length > 0) {
      const reqOption = {
        method: "POST",
        body: JSON.stringify(formData),
        headers:{
          'Content-Type': 'application/json'
        }
      }

      fetch(blogUrl, reqOption).then(res => res.text()).then(res => {
        alert('Blog Saved Successfully')
        navigate(`/blogdetail/${formData.id}`)
        console.log(formData)
      }).catch(er => {
        alert('Check Console Panel An Error Occured')
        console.log('error', er)
      })

      setErrors([])
    } else {
      setErrors(['Recheck data entered and try again'])
    }
  }

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col md={3}></Col>
        <Col md={7}>
          <h2 className="text-center m-4">Create A New Blog</h2>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="blogTitle">Blog Title</InputGroup.Text>
              <Form.Control type="text" name='title' onChange={handleChange} value={formData.title} placeholder="Blog Title" aria-label="Blog Title" aria-describedby="blogTitle" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="blogimagUrl">Blog Image Url</InputGroup.Text>
              <Form.Control type="text" name='image' onChange={handleChange} value={formData.image} placeholder="Blog Image Url" aria-label="Blog Image Url" aria-describedby="blogimagUrl" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="blogcontent">Blog Content</InputGroup.Text>
              <Form.Control as="textarea" name='blogdata' onChange={handleChange} value={formData.blogdata} placeholder="Blog Content" aria-label="Blog Content" aria-describedby="blogcontent" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="blogreadtime">Blog Read Time</InputGroup.Text>
              <Form.Control type="number" name='readTime' onChange={handleChange} value={formData.readtime} placeholder="Blog Read Time" aria-label="Blog Read Time" aria-describedby="blogreadtime" />
            </InputGroup>

            <div className="d-flex justify-content-center align-items-center">
              <Button variant="success" type="submit">
                Post Blog
              </Button>
            </div>
          </Form>

          {errors.length > 0 ? errors.map((error, index) => (<p key={index} style={{ color: "red" }}>{error}</p>)) : null}
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>

  )
}

export default BlogCreate