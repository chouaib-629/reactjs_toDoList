export default function Input( props ) {
    const {handleAddTodo, inputValue, setInputValue} = props;

    function handleKeyDown( event ) {
        if (event.key === "Enter") {
            handleAddTodo(inputValue)
            setInputValue('')
        }
    }

    return (
        <header>
            <input
                type='text'
                placeholder='Enter TODO...' 
                value={inputValue}
                onChange={ (e) => setInputValue(e.target.value) }
                onKeyDown={handleKeyDown}
            />

            <button
                onClick={ () => { 
                    handleAddTodo(inputValue)
                    setInputValue('')
                } }
            >
                Add
            </button>
        </header>
    )
}
