import { useState, useEffect } from "react"
import Input from "./components/Input"
import List from "./components/List"

function App() {
  const [todos, setTodos] = useState( [] )
  const [inputValue, setInputValue] = useState('')

  const [editedIndex, setEditedIndex] = useState(-1);

  const handleAddTodo = (newTodo) => {
    const newTodosList = [...todos, newTodo];
    persistData(newTodosList);
    setTodos(newTodosList);
  };

  const handleDeleteTodo = (index) => {
    const newTodosList = todos.filter((todo, todoIndex) => index !== todoIndex);
    persistData(newTodosList);
    setTodos(newTodosList);
  };

  const handleEditTodo = (index) => {
    setEditedIndex(index);
  };

  const saveEdit = (index, newValue) => {
    const newTodos = [...todos];
    newTodos[index] = newValue;
    setTodos(newTodos);
    persistData(newTodos);
    setEditedIndex(-1);
  };

  function persistData( newList ) {
    localStorage.setItem('todos', JSON.stringify( {todos: newList} ))
  }

  useEffect( () => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
    
  }, [] )

  return (
    <>
      <Input 
        inputValue={ inputValue } 
        setInputValue={ setInputValue }
        handleAddTodo={ handleAddTodo } 
      />

      <List 
        todos={todos} 
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo} 
        saveEdit={saveEdit}
        editedIndex={editedIndex}
      />
    </>
  )
}

export default App