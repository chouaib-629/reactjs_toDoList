import { useState } from "react";

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

    const handleChange = (e) => {
        setEditValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            saveEdit(index, editValue);
        }
    };

    return (
        <li className="todoItem">
            {editMode ? (
                <input
                    className="editInput"
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
