import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { nanoid } from 'nanoid'

function BlogCreate(){
  const [errors, setErrors] = useState([])
  const [formData, setformData] = useState({
    id: nanoid(),
    image: '',
    blogdata: '',
    readtime: 0,
    postedDate: '',
    title: ''
  });
  // const [submittedData, setSubmittedData] = useState([]);

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
    console.log(formData)
    // if (event.target.length > 0) {
    //   const formData = { firstName: firstName, lastName: lastName };
    //   const dataArray = [...submittedData, formData]
    //   setSubmittedData(dataArray);

    //   setErrors([])
    // } else {
    //   setErrors(['First Name is Required'])
    // }
  }

  return (
    <div>
      <h2>Create A New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' onChange={handleChange} value={formData.title} />
        <input type="text" name='image' onChange={handleChange} value={formData.image} />
        <input type="text" name='blogdata' onChange={handleChange} value={formData.blogdata} />
        <input type="number" name='readtime' onChange={handleChange} value={formData.readtime} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0 ? errors.map((error, index) => (<p key={index} style={{ color: "red" }}>{error}</p>)) : null}
    </div>

  )
}

export default BlogCreate