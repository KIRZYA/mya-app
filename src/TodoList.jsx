import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList({ todos, onToggle, onDelete }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </ul>
    );
}

export default TodoList;