import React, { useState } from 'react'
import axios from 'axios'
import { Button, TextField } from '@material-ui/core';

const CreatePost = () => {
    const [data, setData] = useState({ title: ''});

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        }) 
    }
          return (
            <div className="container">
                <form  onSubmit={handleSubmit}> 
                    <TextField label="Enter title here" name="title" value={data.title} onChange={handleChange} required />
                    <Button style={{margin:10}} color='secondary' type="submit">submit</Button>
                </form>
            </div>
        );
}
export default CreatePost;