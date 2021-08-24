import { useState, useEffect } from "react"
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
 

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(()=>{
    getLocalTodos();
  },[])

  useEffect(()=> {
    filterHandler();
    saveLocalTodos();
  },[todos,status])

  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }



  //run once when the app starts
 

  const saveLocalTodos =()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
  }
  const getLocalTodos =()=>{
    if(localStorage.getItem("todos")=== null){
      localStorage.setItem("todos",JSON.stringify([]))
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      console.log(todoLocal);
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header>
       <h1>Dhruv's ToDo List </h1>
      </header>
      <Form  
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos}  
        setInputText={setInputText} 
        setStatus={setStatus}
      />
      <ToDoList 
        todos={todos} 
        filteredTodos={filteredTodos} 
        setTodos={setTodos}  
      />
    </div>
  );
}

export default App;
  