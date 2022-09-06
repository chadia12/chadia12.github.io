import React from 'react';
import TodoDeleteButton from './TodoDeleteButton';
import TodoEditButton from './TodoEditButton';
function TodoItem(){
    return (
        <div>
<h2>My to do Item</h2>
    <ul>
        <li>item 1</li>
        <li>item 2 </li>
        <li>item 3 </li>
        <li>item 4 </li>
    </ul>
<TodoDeleteButton />
<br/>
<TodoEditButton />
        </div>
    )
}
export default TodoItem;
