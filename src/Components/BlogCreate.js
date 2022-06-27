import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function BlogCreate(){
  const current = new Date();

  const [errors, setErrors] = useState([])
  const [formData, setformData] = useState({
    id: nanoid(),
    image: '',
    blogdata: '',
    readtime: 0,
    postedDate: `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`,
    title: ''
  });

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
    const blogUrl = 'https://phase2backend.herokuapp.com/blogs'

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
    <div>
      <h2>Create A New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' onChange={handleChange} placeholder='title' value={formData.title} />
        <input type="text" name='image' onChange={handleChange} placeholder='image url' value={formData.image} />
        <input type="text" name='blogdata' onChange={handleChange} placeholder='blogdata' value={formData.blogdata} />
        <input type="number" name='readtime' onChange={handleChange} value={formData.readtime} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0 ? errors.map((error, index) => (<p key={index} style={{ color: "red" }}>{error}</p>)) : null}
    </div>

  )
}

export default BlogCreate