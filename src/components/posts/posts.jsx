import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItem, List, ListItemText, Button } from '@material-ui/core';
import Loader from "../loader/loader";
import CreatePost from "./createPost";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1)
  const [loading, setLoading ] = useState (true)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
    .then(response => {
      setPosts(response.data)
      setLoading(false)
    }).catch(error => {
      console.log(error)
    })}, [page]);

    function nextPage() {
      if(page < 10) setPage(page+ 1)
    }
  
    function prevPage() {
      if(page > 1) setPage(page - 1)
  }

  return (
    <List>
      <CreatePost/>
      {loading && <Loader/>}
      {posts.map((post) => {
        return (
          <ListItem key={post.id}>
            <ListItemText primary={post.title} />
          </ListItem>
        );
      })}
       <div>
          <Button style={{margin:10}} variant="contained" color="secondary" onClick={() => prevPage()}>Previous</Button>
          <Button style={{margin:10}} variant="contained" color="secondary" onClick={() => nextPage()}>Next</Button>
      </div>
    </List>
  );

};
export default Posts;