import React from 'react'
import Todo from './Todo'

function ToDoList({todos, setTodos , filteredTodos}) {
    
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo=>(
                        <Todo  
                            text={todo.text} 
                            todos={todos}
                            setTodos={setTodos} 
                            todo={todo}
                            key={todo.id}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList
