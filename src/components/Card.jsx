export default function Card( props ) {
    const { children, index, handleDeleteTodo, handleEditTodo } = props

    return (
        <li className='todoItem'>
            { children }

            <div className='actionsContainer'>
                <button     
                    className='modifierButton'
                    onClick={ () => {
                        handleEditTodo(index)
                    } }
                >
                    <i className='fa-solid fa-pen-to-square'></i>
                </button>

                <button 
                    className='deleteButton' 
                    onClick={ () => { 
                        handleDeleteTodo(index) 
                    }}
                >
                    <i className='fa-solid fa-trash'></i>
                </button>
            </div>
        </li>
    )
}
