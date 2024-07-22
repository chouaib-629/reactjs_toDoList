import { useState, useRef, useEffect } from "react";

export default function Card(props) {
    const {
        index,
        todo,
        editMode,
        saveEdit,
        handleDeleteTodo,
        handleEditTodo,
    } = props;
    const [editValue, setEditValue] = useState(todo);

    const inputRef = useRef(null);

    const handleChange = (e) => {
        setEditValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            saveEdit(index, editValue);
        }
    };

    useEffect(() => {
        if (editMode && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editMode]);

    return (
        <li className="todoItem">
            {editMode ? (
                <input
                    ref={inputRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={editValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            ) : (
                <p>{todo}</p>
            )}
            {!editMode && (
                <div className="actionsContainer">
                    <button
                        className="modifierButton"
                        onClick={() => handleEditTodo(index)}
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                        className="deleteButton"
                        onClick={() => handleDeleteTodo(index)}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            )}
        </li>
    );
}
