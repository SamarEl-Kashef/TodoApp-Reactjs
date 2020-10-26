import React, {useState, useEffect} from 'react';
import { List, ListItem, ListItemText, Checkbox, Button } from '@material-ui/core';
import axios from 'axios'
import Loader from '../loader/loader';

function TodoList() {
  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState([]);
  const [page, setPage ] = useState(1)
  const [loading, setLoading ] = useState (true)
 
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}`)
    .then(response => {
      setTodos(response.data)
      setLoading(false)
    }).catch(error => {
      console.log(error)
    })}, [page]);

    function nextPage() {
      // setPage(page => Math.min(page + 1, 20));
      if(page < 20) setPage(page+ 1)
    }
    function prevPage() {
      if(page > 1) setPage(page - 1)
  }

  const handleToggle = (todos) => () => {
     axios.post(`https://jsonplaceholder.typicode.com/todos?completed=${todos.completed}`, todos.completed)
     .then((res)=>{
       console.log(res)
       checked === false ?
        setChecked(true)
        :
        setChecked(false)
     })
    
  };
  // console.log(checked)
  return (
    <List>
      {loading && <Loader/>}
      {todos.map((todos) => {
        return (
           <ListItem key={todos.id} role={undefined} dense button onClick={handleToggle(todos)}>
              <Checkbox
                edge="start"
                checked={todos.completed}
                onChange={handleToggle}
                tabIndex={-1}
                disableRipple
              />
            <ListItemText primary={todos.title} />
          </ListItem>
        );
      })}
        <div>
      <Button style={{margin:10}} variant="contained" color="secondary" onClick={() => prevPage()}> Previous </Button>
      <Button style={{margin:10}} variant="contained" color="secondary" onClick={() => nextPage()}>Next</Button>
      </div>
    </List>
  );
}
export default TodoList