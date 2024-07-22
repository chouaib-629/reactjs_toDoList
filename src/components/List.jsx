import Card from './Card';

export default function List(props) {   
    const { todos, editedIndex, handleEditTodo, handleDeleteTodo, saveEdit } = props;

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => (
                <Card 
                    key={todoIndex} 
                    index={todoIndex} 
                    todo={todo}
                    editMode={todoIndex === editedIndex}
                    handleEditTodo={handleEditTodo}
                    handleDeleteTodo={handleDeleteTodo}
                    saveEdit={saveEdit}
                />
            ))}
        </ul>
    );
}
