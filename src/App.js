import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodos } from './MyComponents/AddTodos';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else initTodo = JSON.parse(localStorage.getItem("todos"));

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onDelete = (todo) => {
    console.log('I am onDelete of todo', todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);



  }

  return (
    <>
      <Router>
        <Header title="MyTodoList" searchBar={false} />
        <Switch>
          <Route exact path="/about" render={()=>{
            return (
              <>
                <About/>
              </>
            )
          }}>
          </Route>
          <Route exact path="/" render={()=>{
            return (
              <>
                <AddTodos addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
            
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
