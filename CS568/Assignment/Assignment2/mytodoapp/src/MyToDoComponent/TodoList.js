 
 import React from "react";
 import TodoItem from "./TodoItem";

 function TodoList(){
    return(
       <div>
        <h2> My To Do List</h2>
        <ul>
            <li> Hit the gym</li>
            <li>Do Assignment</li>
            <li>Read a book</li>
        </ul>
<TodoItem />
       </div> 
    )
 }
 export default TodoList;