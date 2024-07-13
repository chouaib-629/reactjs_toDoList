import { useState, useEffect } from "react"
import Input from "./components/Input"
import List from "./components/List"

function App() {
  const [todos, setTodos] = useState( [] )
  const [inputValue, setInputValue] = useState('')

  function handleAddTodo( newTodo ) {
    const newTodosList = [...todos, newTodo];
    persistData(newTodosList)
    setTodos(newTodosList);
  }
  
  function handleDeleteTodo( index ) {
    const newTodosList = todos.filter( (todo, todoIndex) => {
      return index !== todoIndex;
    })
    persistData(newTodosList)
    setTodos(newTodosList)
  }
  
  function handleEditTodo( index ) {
    const valueToBeEdited = todos[index]
    setInputValue(valueToBeEdited)
    handleDeleteTodo(index)
  }
  
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
        todos={ todos } 
        handleEditTodo={ handleEditTodo }
        handleDeleteTodo={ handleDeleteTodo } 
      />
    </>
  )
}

export default App
