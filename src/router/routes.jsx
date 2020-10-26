import React from "react";
import { Switch, Route, BrowserRouter as Router  } from 'react-router-dom';
import Navbar from '../components/navbar'
import Posts from "../components/posts/posts";
import TodoList from "../components/todos/todoList";
function Routes() {
  return (
<Router>
    <Navbar/>
        <Switch>
            <Route path="/" exact component={TodoList} />
            <Route path="/Posts" component={Posts} />
            <Route component={TodoList} />
        </Switch>
</Router>
  );
};
export default Routes;